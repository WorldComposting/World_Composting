import os
import json
import re

def parse_blog():
    blog_dir = '/mnt/h/Hermes/landing-page-fixed/blog'
    output_file = '/mnt/h/Hermes/landing-page-fixed/src/data/blog.json'
    
    if not os.path.exists(blog_t):
        print(f"Error: Blog directory '{blog_dir}' does not exist.")
        return

    posts = []

    # Ensure output directory exists
    os.makedirs(os.path.dirname(output_file), exist_ok=True)

    # Iterate through all .md files in the blog directory
    for filename in sorted(os.listdir(blog_dir)):
        if filename.endswith('.md'):
            file_path = os.path.join(blog_dir, filename)
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Split frontmatter from content
            # Frontmatter is between two '---' delimiters
            parts = re.split(r'^---$', content, flags=re.MULTILINE)
            
            if len(parts) >= 3:
                frontmatter_text = parts[1]
                body_text = parts[2].strip()

                # Parse frontmatter (simple key: value parsing)
                metadata = {}
                for line in frontmatter_text.strip().split('\n'):
                    if ':' in line:
                        key, value = line.split(':', 1)
                        metadata[key.strip()] = value.strip()

                # Create the post object
                post_obj = {
                    "title": metadata.get("title", "Untitled Post"),
                    "date": metadata.get("date", "No Date"),
                    "summary": metadata.get("summary", ""),
                    "content": body_text,
                    "slug": filename.replace('.md', '')
                }
                posts.append(post_obj)
            else:
                print(f"Warning: Skipping {filename} - No valid frontmatter found.")

    # Sort posts by date descending (newest first)
    posts.sort(key=lambda x: x['date'], reverse=True)

    # Write to JSON
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(posts, f, indent=4)

    print(f"Successfully processed {len(posts)} posts into {output_file}")

if __name__ == "__main__":
    # Hardcoding paths based on our project structure
    blog_t = '/mnt/h/Hermes/landing-page-fixed/blog' 
    parse_blog()
