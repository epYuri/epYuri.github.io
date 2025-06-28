document.querySelector('.start-game-btn').addEventListener('click', function () {
    this.style.display = 'none';
    const images = [
        'img/dongZuo01.png',
        'img/dongZuo02.png',
        'img/xiYiJian01.png',
        'img/beiJing01.png'
    ];
    let currentIndex = 0;
    const currentLayer = document.querySelector('.bg-layer.current');
    const nextLayer = document.querySelector('.bg-layer.next');
    function switchImage() {
        if (currentIndex >= images.length) {
            window.dispatchEvent(new Event('animation-complete'));
            return;
        }
        nextLayer.style.backgroundImage = `url(${images[currentIndex]})`;
        nextLayer.style.opacity = 1;
        setTimeout(() => {
            currentLayer.style.backgroundImage = nextLayer.style.backgroundImage;
            nextLayer.style.opacity = 0;
            currentIndex++;
            setTimeout(switchImage, 500);
        }, 1000);
    }
    switchImage();
});

