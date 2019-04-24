
    // Create favicon link element
    const favicon = document.createElement('link');
    favicon.rel = 'shortcut icon';
    favicon.type = 'image/png';
    document.getElementsByTagName('head')[0].appendChild(favicon);
    // Create hidden canvas
    const w = 32;
    const h = 32;
    const canvas = document.createElement('canvas');
    canvas.style = 'display: none';
    canvas.width = w;
    canvas.height = h;
    document.body.appendChild(canvas);
    // Grab canvas context
    const ctx = canvas.getContext('2d');
    // Create hidden video element
    const video = document.querySelector('#movie_player > div.html5-video-container > video');
    // Loop forever
    const loop = () => {
        // save transform
        ctx.save();
        // Copy video to canvas   width: 1198px; height: 674px;
        const margin = (1198 - 674) / 2;
        ctx.drawImage(video, margin, 0, 674, 674, 0, 0, canvas.width, canvas.height);
        // restore transform
        ctx.restore();
        // Set canvas to favicon
        favicon.setAttribute('href', canvas.toDataURL());
        // Loop
        setTimeout(loop, 1000/24);
    };

    loop();

