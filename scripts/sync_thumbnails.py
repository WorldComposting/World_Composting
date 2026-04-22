import json
import os
import requests
from urllib.parse import urlparse

# Configuration
JSON_PATH = '/mnt/h/Hermes/landing-page-fixed/src/data/videos.json'
ASSETS_DIR = '/mnt/h/Hermes/landing-page-fixed/src/assets/thumbnails/'
OUTPUT_JSON = '/mnt/h/Hermes/landing-page-fixed/src/data/videos_local.json'

def download_thumbnail(url, filename):
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            with open(os.path.join(ASSETS_DIR, filename), 'wb') as f:
                f.write(response.content)
            return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
    return False

def main():
    if not os.path.exists(ASSETS_DIR):
        os.makedirs(ASSETS_DIR)
        print(f"Created directory: {ASSETS_DIR}")

    with open(JSON_PATH, 'r') as f:
        videos = json.load(f)

    updated_videos = []
    success_count = 0

    for i, v in enumerate(videos):
        original_url = v.get('thumbnail')
        if not original_url:
            print(f"No thumbnail URL for video: {v.get('title')}")
            updated_videos.append(v)
            continue

        # Generate a clean local filename
        ext = os.path.splitext(urlparse(original_url).path)[1] or '.jpg'
        local_filename = f"video_{i:03d}{ext}"
        local_path = f"src/assets/thumbnails/{local_filename}"

        print(f"Processing: {v.get('title')}...", end=" ", flush=True)

        if download_thumbnail(original_url, local_filename):
            print("✅ Success")
            # Create a copy of the video object with the new local path
            new_v = v.copy()
            new_v['thumbnail'] = local_path
            updated_videos.append(new_v)
            success_count += 1
        else:
            print("❌ Failed")
            updated_videos.append(v)

    # Write the updated JSON
    with open(OUTPUT_JSON, 'w') as f:
        json.dump(updated_videos, f, indent=4)

    print(f"\nDone! Successfully downloaded {success_count}/{len(videos)} thumbnails.")
    print(f"Updated JSON saved to: {OUTPUT_JSON}")

if __name__ == "__main__":
    main()
