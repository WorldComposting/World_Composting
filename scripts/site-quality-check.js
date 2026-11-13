#!/usr/bin/env node
'use strict';

// Dependency-free checks for the static GitHub Pages site.
const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const ignoredDirs = new Set(['.git', '.github', 'node_modules']);
const htmlFiles = [];
const dataFiles = [];
const errors = [];
const warnings = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) walk(path.join(dir, entry.name));
      continue;
    }
    const file = path.join(dir, entry.name);
    if (/\.html?$/i.test(entry.name)) htmlFiles.push(file);
    if (/\.json$/i.test(entry.name) && file.includes(path.join('src', 'data'))) dataFiles.push(file);
  }
}
function rel(file) { return path.relative(root, file).split(path.sep).join('/'); }
function existsPublicTarget(target) {
  const clean = decodeURIComponent(target.split(/[?#]/, 1)[0]).replace(/^\/+/, '');
  if (!clean) return fs.existsSync(path.join(root, 'index.html'));
  const candidate = path.join(root, clean);
  if (!fs.existsSync(candidate)) return false;
  if (fs.statSync(candidate).isDirectory()) return fs.existsSync(path.join(candidate, 'index.html'));
  return fs.statSync(candidate).isFile();
}

walk(root);
for (const file of dataFiles) {
  try { JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (error) { errors.push(`Invalid JSON: ${rel(file)} — ${error.message}`); }
}

for (const file of htmlFiles) {
  const source = fs.readFileSync(file, 'utf8');
  const page = rel(file);
  if (!/<title>\s*[^<]+\s*<\/title>/i.test(source)) warnings.push(`Missing or empty title: ${page}`);
  if (!/<meta\s+[^>]*name=["']description["'][^>]*content=["'][^"']+["']/i.test(source) &&
      !/<meta\s+[^>]*content=["'][^"']+["'][^>]*name=["']description["']/i.test(source)) {
    warnings.push(`Missing or empty meta description: ${page}`);
  }
  if (!/<h1\b[^>]*>\s*[^<]+/i.test(source)) warnings.push(`Missing H1: ${page}`);
  if (!/<link\\s+[^>]*rel=["']canonical["']/i.test(source) &&
      !/<link\\s+[^>]*href=["'][^"']+["'][^>]*rel=["']canonical["']/i.test(source)) {
    warnings.push(`Missing canonical URL: ${page}`);
  }

  const affiliatePage = /(?:amzn\.to|amazon\.com|hungryworms\.com|vermibag\.com|gemebio\.com|impact\.com|awin\.com|shareasale\.com|linksynergy\.com|cj\.com)/i.test(source);
  if (affiliatePage && !/(affiliate disclosure|affiliate link|qualifying purchases|commission)/i.test(source)) {
    warnings.push(`Affiliate link detected but no obvious disclosure text: ${page}`);
  }

  const attrs = [...source.matchAll(/\b(?:href|src)=["']([^"'<>]+)["']/gi)];
  for (const match of attrs) {
    const raw = match[1].trim();
    if (!raw || /^(?:https?:|mailto:|tel:|javascript:|data:|blob:|\/\/)/i.test(raw) || raw.startsWith('#')) continue;
    const target = raw.startsWith('/') ? raw : path.posix.join(path.posix.dirname(page), raw);
    if (!existsPublicTarget(target)) errors.push(`Broken local reference in ${page}: ${raw}`);
  }
}

const sitemapPath = path.join(root, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const locations = [...sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/gi)].map(m => m[1].trim());
  if (!locations.length) errors.push('sitemap.xml contains no <loc> URLs');
  for (const url of locations) {
    try {
      const parsed = new URL(url);
      if (parsed.hostname !== 'www.worldcomposting.com' && parsed.hostname !== 'worldcomposting.com') continue;
      if (!existsPublicTarget(parsed.pathname)) errors.push(`Sitemap URL has no matching file: ${url}`);
    } catch { errors.push(`Invalid sitemap URL: ${url}`); }
  }
} else {
  warnings.push('sitemap.xml not found');
}

console.log(`Scanned ${htmlFiles.length} HTML pages and ${dataFiles.length} data JSON files.`);
for (const warning of warnings) console.warn(`WARN: ${warning}`);
for (const error of errors) console.error(`ERROR: ${error}`);
console.log(`Quality check: ${errors.length} error(s), ${warnings.length} warning(s).`);
if (errors.length) process.exitCode = 1;
