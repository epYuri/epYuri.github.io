window.addEventListener('animation-complete', () => {
    const washerContainer = document.createElement('div');
    washerContainer.className = 'washers-container';
    ['top', 'bottom'].forEach((position) => {
        const washer = document.createElement('div');
        washer.className = `washer ${position}`;
        washer.style.backgroundImage = 'url(img/xiYiJi02.png)';
        washerContainer.appendChild(washer);
    });
    document.body.appendChild(washerContainer);
});