// 按钮点击事件
document.querySelector('.start-game-btn').addEventListener('click', function() {
    // 隐藏按钮
    this.style.display = 'none';

    // 定义需要切换的图片路径（第二到第四张）
    const images = [
        '../img/fengMian02.png',
        '../img/xiYiJi01.png',
        '../img/xiYiJian01.png'
    ];

    let currentIndex = 0;
    const currentLayer = document.querySelector('.bg-layer.current');
    const nextLayer = document.querySelector('.bg-layer.next');

    // 切换图片函数
    function switchImage() {
        if (currentIndex >= images.length) return;

        // 设置下一张图的背景
        nextLayer.style.backgroundImage = `url(${images[currentIndex]})`;
        // 渐变显示下一张图（2秒过渡）
        nextLayer.style.opacity = 1;

        // 渐变完成后更新当前层并准备下一次切换
        setTimeout(() => {
            currentLayer.style.backgroundImage = nextLayer.style.backgroundImage;
            nextLayer.style.opacity = 0; // 重置下一层为透明
            currentIndex++;
            // 停留1秒后继续切换
            setTimeout(switchImage, 1000);
        }, 2000);
    }

    // 启动第一次切换
    switchImage();
});