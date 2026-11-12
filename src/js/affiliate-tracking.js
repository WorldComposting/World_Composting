/*
 * World Composting affiliate click tracking.
 * Sends a GA4 affiliate_click event for links explicitly marked as affiliate,
 * links with rel="sponsored", and known affiliate-program destinations.
 */
(function () {
  "use strict";

  const AFFILIATE_HOSTS = [
    "amzn.to",
    "amazon.com",
    "hungryworms.com",
    "vermibag.com",
    "gemebio.com",
    "impact.com",
    "awin.com",
    "awin1.com",
    "shareasale.com",
    "linksynergy.com",
    "cj.com",
    "rakutenadvertising.com"
  ];

  function hostMatches(hostname, domain) {
    return hostname === domain || hostname.endsWith("." + domain);
  }

  function getAffiliateUrl(anchor) {
    try {
      return new URL(anchor.href, window.location.href);
    } catch (error) {
      return null;
    }
  }

  function isAffiliateLink(anchor, url) {
    if (anchor.dataset.affiliate === "true") return true;

    const relValues = (anchor.getAttribute("rel") || "").toLowerCase().split(/\s+/);
    if (relValues.includes("sponsored")) return true;

    return AFFILIATE_HOSTS.some(function (domain) {
      return hostMatches(url.hostname.toLowerCase(), domain);
    }) || (
      hostMatches(url.hostname.toLowerCase(), "amazon.com") &&
      url.searchParams.has("tag")
    );
  }

  function getProgram(hostname) {
    const host = hostname.toLowerCase();

    if (hostMatches(host, "amzn.to") || hostMatches(host, "amazon.com")) return "amazon";
    if (hostMatches(host, "hungryworms.com")) return "hungry_worms";
    if (hostMatches(host, "vermibag.com")) return "vermibag";
    if (hostMatches(host, "gemebio.com")) return "geme";
    if (hostMatches(host, "impact.com")) return "impact";
    if (hostMatches(host, "awin.com") || hostMatches(host, "awin1.com")) return "awin";
    if (hostMatches(host, "shareasale.com")) return "shareasale";
    if (hostMatches(host, "linksynergy.com")) return "rakuten";
    if (hostMatches(host, "cj.com")) return "commission_junction";
    if (hostMatches(host, "rakutenadvertising.com")) return "rakuten";
    return "other";
  }

  function getProductName(anchor) {
    const card = anchor.closest(".gear-card, .product-card, [data-product-name]");
    const heading = card && card.querySelector(".gear-card-name, .product-name, h1, h2, h3, h4");
    const name = anchor.dataset.productName ||
      (card && card.dataset.productName) ||
      (heading && heading.textContent) ||
      anchor.textContent ||
      anchor.getAttribute("aria-label") ||
      "unspecified";

    return name.replace(/\s*\(affiliate link\)/gi, "").replace(/\s+/g, " ").trim().slice(0, 120);
  }

  function getPlacement(anchor) {
    if (anchor.closest(".gear-card, .product-card")) return "product_card";
    if (anchor.closest(".check-desc")) return "guide_content";
    if (anchor.closest("footer")) return "footer";
    if (anchor.closest("nav, header")) return "navigation";
    if (anchor.closest("article")) return "article";
    if (anchor.closest("section")) return "section";
    return "page_content";
  }

  function getLinkType(anchor) {
    if (anchor.querySelector("img")) return "image";
    if (anchor.matches(".button, .btn, button, .gear-card-link, [role='button']")) return "button";
    return "text";
  }

  document.addEventListener("click", function (event) {
    const anchor = event.target.closest && event.target.closest("a[href]");
    if (!anchor) return;

    const url = getAffiliateUrl(anchor);
    if (!url || !isAffiliateLink(anchor, url)) return;
    if (typeof window.gtag !== "function") return;

    const linkText = (anchor.innerText || anchor.getAttribute("aria-label") || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 150);

    window.gtag("event", "affiliate_click", {
      affiliate_program: getProgram(url.hostname),
      product_name: getProductName(anchor),
      link_domain: url.hostname,
      link_url: url.href,
      page_path: window.location.pathname,
      page_title: document.title,
      link_placement: getPlacement(anchor),
      link_type: getLinkType(anchor),
      link_text: linkText
    });
  }, true);
})();
