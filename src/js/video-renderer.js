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
        "tDSA6k6rwwY": [
            "Worms escaping usually means conditions are wrong (too wet, too hot, or no food)",
            "Check moisture levels and adjust bedding if needed",
            "Ensure proper ventilation without creating drafts"
        ],
        "Eji3HGz97EY": [
            "Build your pile at least 3x3x3 feet to retain enough heat for thermophilic bacteria",
            "Layer three parts browns to one part greens by volume for optimal C:N ratio",
            "Start with a coarse brown base for drainage, then alternate layers"
        ],
        "4RAWlDsxdzE": [
            "Pre-composting accelerates decomposition by weeks compared to direct feeding",
            "Layer greens and browns in a separate bin before introducing worms",
            "Once pre-composted material cools, add it to your worm habitat"
        ],
        "LMO-FwynYeY": [
            "Turn the pile every 2-3 days when temperature drops 10-15 degrees from peak",
            "Maintain moisture at wrung-out sponge level — too wet kills aerobic bacteria",
            "A three-bin system lets you manage active, curing, and storage batches simultaneously"
        ],
        "ZO1dyKaNqAQ": [
            "Hemp bedding provides excellent structure and aeration in worm bins",
            "Initial setup shows proper moisture levels and worm introduction technique",
            "Hemp is naturally resistant to mold and compaction over time"
        ],
        "3-L2fvXb2bc": [
            "Watch hemp bedding break down over weeks — slower than paper but lasts longer",
            "Decomposition rate indicates healthy microbial activity in the bin",
            "Hemp maintains fluffiness better than shredded newspaper as it breaks down"
        ],
        "3sF6tGkwba0": [
            "Citrus acidity can harm worm bins — lemons take weeks to break down",
            "Worms avoid citrus initially but may consume it over time in small amounts",
            "Limit citrus peels to once per month and bury deeply in bedding"
        ],
        "OhF3QEog4Rw": [
            "Follow-up test shows worms eventually consuming lemon scraps",
            "European Nightcrawlers tolerate citrus better than red wigglers",
            "Small quantities are safe but regular feeding should be avoided"
        ],
        "shlsmMy_gjc": [
            "Bury all food scraps under bedding to prevent fruit fly access",
            "Freeze kitchen scraps for 48 hours before feeding to kill eggs",
            "A damp paper towel on the surface acts as a physical barrier"
        ],
        "vYTQAENFjR0": [
            "Apple cider vinegar traps attract adult flies away from the bin",
            "Dish soap breaks surface tension so flies drown instead of landing",
            "Combine traps with proper food burial for complete elimination"
        ],
        "iufCvxCwy1w": [
            "Migration method is gentle — worms move to fresh food naturally over 2 weeks",
            "Stop feeding one week before harvesting to encourage migration deeper",
            "Harvest every three to six months when bedding turns dark and crumbly"
        ],
        "CufHXbuVAo0": [
            "Pre-compost reaches thermophilic temperatures within 3 days of layering",
            "Temperature monitoring shows when the pile is actively decomposing",
            "A hot pre-compost pile kills weed seeds and pathogens before worm feeding"
        ],
        "_OXAhxbu_HQ": [
            "Screen method quickly separates castings from worms using hardware cloth",
            "Return any worms found on the screen back to your bin immediately",
            "Undigested scraps can be reused as fresh bedding or added to outdoor compost"
        ],
        "AE8A2kCJYkY": [
            "Biochar must be ground to small particles before it can effectively charge with nutrients",
            "Soaking in compost tea for 24-48 hours activates the porous structure",
            "Charged biochar should never be added fresh — it will rob soil nitrogen"
        ],
        "iLrkTxMZWMA": [
            "Small batch production is ideal for home gardeners with limited feedstock",
            "A simple drum kiln can produce enough biochar for a typical composting setup",
            "Batch size should match your charging capacity — don't make more than you can prepare"
        ]
    };

    // Method-specific video groupings for each page (NO CROSS-REFERENCES)
    var methodVideos = {
        worm: ["k-gSL-abaWA", "sqUvd9Be6Q0"],
        bokashi: ["zAqkAqmA458", "HJLxpc3UFFg"],
        hot: ["4RAWlDsxdzE", "LMO-FwynYeY"],
        bedding: ["ZO1dyKaNqAQ", "3-L2fvXb2bc"],
        "forbidden-foods": ["3sF6tGkwba0", "OhF3QEog4Rw"],
        "fruit-flies": ["vYTQAENFjR0"],
        harvesting: ["iufCvxCwy1w", "_OXAhxbu_HQ"],
        "best-materials": ["Eji3HGz97EY"],
        "cn-ratio": ["CufHXbuVAo0"],
        "not-heating": ["tDSA6k6rwwY"],
        "speed-tips": ["gtjzfm--bKo"],
        "zero-waste-kitchen": ["-_ELuS7Lgwg", "HJLxpc3UFFg"],
        sustainability: ["ej9gRwssrgk", "0QvS2l6zWYk"],
        biochar: ["AE8A2kCJYkY", "iLrkTxMZWMA"],
        "start-here": [],
        about: [],
        gear: [],
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
