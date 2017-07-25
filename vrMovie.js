(function () {
            /*
            Scene from Mery Project - http://www.meryproject.com/
            Video rendered by Pedro Fernando Gomez Fernandez - http://pedrofe.com/rendering-for-oculus-rift-with-arnold/
            */
            var video = VR.video({
                stereo: 'horizontal',
                sphere: true,
                /*
                Video sources are provided in two formats: mp4 and webm, as not all browsers can play
                all formats. They are also provided in two sizes: 4096x2048 and 1024x512. The large
                file may fail to play on certain devices (e.g. mobile). The script will detect failure
                and fall back to the smaller file.
                For successful fallback, sources should be sorted first by file format and then by size,
                with the highest resolution files first. 
                */
                src: [
                    'assets/rail.webm',
                    'assets/rail-sm.webm'
                ]
            }).play();
            video.muted = true;
            video.on('error', function (evt) {
                console.log('video error', evt);
            });
            video.on('play', function (evt) {
                console.log('video play', evt);
            });
            video.on('pause', function (evt) {
                console.log('video play', evt);
            });
            // shake to pause/play the video
            VR.on('shake', function () {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
            //make a button to toggle volume
            var volume = document.createElement('span');
            volume.id = 'volume';
            volume.setAttribute('title', 'Toggle Sound');
            volume.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 8 8"><path d="M5.344 0l-1.344 2h-2v4h2l1.344 2h.656v-8h-.656z"></path></svg>';
            volume.onclick = function () {
                video.muted = !video.muted;
            };
            document.getElementById('buttons').appendChild(volume);
            //make video element a global variable so the next script can access it
            window.video = video.element;
        }());