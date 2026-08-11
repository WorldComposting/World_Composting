// Video Section Renderer - loads videos.json and renders video cards
// Include this script at the bottom of any checklist page that wants to show videos
(function() {
    'use strict';

    // Key takeaways for each video (manually curated)
    var videoTakeaways = {
        "k-gSL-abaWA": [
            "Urban Worm Bag and Vermibag Max are both excellent worm bin options",
            "Population growth indicates a healthy, well-managed system",
            "System health can be assessed by worm activity and castings production"
        ],
        "sqUvd9Be6Q0": [
            "A population boom suggests optimal conditions in your worm bin",
            "Monitor temperature and moisture to sustain growth",
            "Baby worms indicate successful reproduction — your colony is thriving"
        ],
        "gtjzfm--bKo": [
            "Worm bags offer superior airflow compared to plastic totes",
            "Totes are cheaper upfront but may need drilling for ventilation",
            "Choose based on your space, budget, and airflow needs"
        ],
        "J6FGa8a4lHo": [
            "European Nightcrawlers are excellent composters for outdoor bins",
            "Population growth signals a healthy, well-fed colony",
            "Baby worms mean your bin is producing excess castings soon"
        ],
        "0QvS2l6zWYk": [
            "Healthy worms are active and moving through bedding quickly",
            "35-day progress shows steady castings production",
            "Regular feeding schedule keeps the system in balance"
        ],
        "ej9gRwssrgk": [
            "14-gallon totes work well for African Nightcrawlers with proper drainage",
            "Common issues include moisture management and airflow",
            "Solutions involve adjusting bedding depth and ventilation holes"
        ],
        "iufCvxCwy1w": [
            "Harvesting castings is easiest when worms migrate to fresh food",
            "Push everything to one side, add new bedding on the other",
            "Wait a few weeks for migration, then scoop finished castings"
        ],
        "tDSA6k6rwwY": [
            "Worms escaping usually means conditions are wrong (too wet, too hot, or no food)",
            "Check moisture levels and adjust bedding if needed",
            "Ensure proper ventilation without creating drafts"
        ]
    };

    // Method-specific video groupings for each page
    var methodVideos = {
        worm: ["k-gSL-abaWA", "sqUvd9Be6Q0", "gtjzfm--bKo", "J6FGa8a4lHo", "0QvS2l6zWYk", "ej9gRwssrgk", "iufCvxCwy1w", "tDSA6k6rwwY"],
        bokashi: ["zAqkAqmA458", "HJLxpc3UFFg", "-_ELuS7Lgwg"],
        hot: [],
        tumbler: [],
        tea: [],
        lasagna: []
    };

    // Load videos.json and return full video objects filtered by method
    function loadVideosByMethod(method) {
        return fetch('src/data/videos.json')
            .then(function(res) {
                if (!res.ok) throw new Error('Could not load video data.');
                return res.json();
            })
            .then(function(allVideos) {
                var ids = methodVideos[method] || [];
                if (ids.length === 0) return [];
                // Filter to only videos whose ID is in the method's list
                return allVideos.filter(function(v) {
                    return v.id && ids.indexOf(v.id) !== -1;
                });
            })
            .catch(function(e) {
                console.error('Error loading videos:', e);
                return [];
            });
    }

    function renderVideoSection(containerId, method) {
        var container = document.getElementById(containerId);
        if (!container) return;

        // If second arg is a string (method name), load from JSON
        // If it's an array of objects, use directly
        var videosPromise;
        if (typeof method === 'string') {
            videosPromise = loadVideosByMethod(method);
        } else if (Array.isArray(method)) {
            videosPromise = Promise.resolve(method);
        } else {
            return;
        }

        videosPromise.then(function(videos) {
            if (!videos || videos.length === 0) {
                container.innerHTML = '';
                return;
            }

            var html = '<div class="video-section">';
            html += '<h2 class="video-section-title">Watch & Learn</h2>';
            html += '<p class="video-section-subtitle">Real-world composting updates and tips from our channel.</p>';

            for (var i = 0; i < videos.length; i++) {
                var vid = videos[i];
                if (!vid || !vid.id) continue;

                html += '<div class="video-card" role="article">';
                html += '<div class="video-wrapper">';
                html += '<iframe src="https://www.youtube.com/embed/' + vid.id + '" title="' + (vid.title || 'YouTube video') + '" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                html += '</div>';
                html += '<div class="video-info">';
                html += '<h3 class="video-title"><a href="' + (vid.url || 'https://www.youtube.com/watch?v=' + vid.id) + '" target="_blank" rel="noopener noreferrer">' + (vid.title || 'YouTube Video') + '</a></h3>';

                var takeaways = videoTakeaways[vid.id];
                if (takeaways && takeaways.length > 0) {
                    html += '<div class="key-takeaways">';
                    html += '<p class="key-takeaways-title">Key Takeaways</p>';
                    html += '<ul>';
                    for (var j = 0; j < takeaways.length; j++) {
                        html += '<li>' + takeaways[j] + '</li>';
                    }
                    html += '</ul></div>';
                }

                html += '</div></div>';
            }

            html += '</div>';
            container.innerHTML = html;
        });
    }

    // Expose globally for pages to call
    window.renderVideoSection = renderVideoSection;
    window.videoTakeaways = videoTakeaways;
    window.methodVideos = methodVideos;

})();
