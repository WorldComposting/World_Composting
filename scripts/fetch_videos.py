
import urllib.request
import xml.etree.ElementTree as ET
import json
import os

# The user provided the correct Channel ID
CHANNEL_ID = "UCSJC08qsgXuarRzpQLOPc5g" 

RSS_URL = f"https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}"
OUTPUT_FILE = "../src/data/videos.json"

def fetch_latest_videos():
    print(f"Fetching updates from: {RSS_URL}")
    
    try:
        # Use a User-Agent to avoid being blocked by YouTube
        req = urllib.request.Request(RSS_URL, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'})
        with urllib.request.urlopen(req) as response:
            xml_data = response.read()
        
        root = ET.fromstring(xml_data)
        videos = []

        # Namespaces for Atom and Media
        namespaces = {
            'atom': 'http://www.w3.org/2005/Atom',
            'yt': 'http://www.youtube.com/xml/schemas/2015',
            'media': 'http://www.w3.org/2005/Atom' # Media is often embedded in atom namespace for RSS
        }

        # Iterate through all 'entry' elements in the Atom feed
        for entry in root.findall('{%s}entry'%namespaces['atom']):
            title_elem = entry.find('{%s}title'%namespaces['atom'])
            link_elem = entry.find('{%s}link'%namespaces['atom'])
            
            if title_elem is None or link_elem is None:
                continue

            title = title_elem.text
            link = link_elem.attrib.get('href')

            # Find thumbnail - usually in media:group or media:thumbnail
            thumbnail = "https://via.placeholder.com/400x225?text=Video"
            
            # Look for media thumbnails in the entry
            # The structure is often <media:group><media:thumbnail url="..."/></media:group>
            for group in entry.findall('.//{%s}group'%namespaces['media']):
                thumb_elem = group.find('.//{%s}thumbnail'%namespaces['media'])
                if thumb_elem is not None:
                    thumbnail = thumb_elem.attrib.get('url')
                    break
            
            # Fallback if thumbnail wasn't in a group
            if thumbnail == "https://via.placeholder.com/400x225?text=Video":
                thumb_fallback = entry.find('.//{%s}thumbnail'%namespaces['media'])
                if thumb_fallback is not None:
                    thumbnail = thumb_fallback.attrib.get('url')

            videos.append({
                "id": "", # We will use the link as a unique identifier later
                "title": title,
                "url": link,
                "thumbnail": thumbnail
            })

        if not videos:
            print("No videos found. Check if the Channel ID is correct or if the feed is empty.")
            return

        # Prepare output path relative to script location
        output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), OUTPUT_FILE))
        
        # Ensure directory exists
        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(videos, f, indent=4, ensure_ascii=False)
            
        print(f"Successfully updated {len(videos)} videos in {output_path}")

    except Exception as e:
        print(f"Error occurred: {e}")

if __name__ == "__main__":
    fetch_latest_videos()
