// 轮播图逻辑
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// 自动轮播
let autoPlay = setInterval(() => showSlide(currentSlide + 1), 5000);

// 左右箭头控制
document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoPlay);
    showSlide(currentSlide - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoPlay);
    showSlide(currentSlide + 1);
});

// 导航点控制
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(autoPlay);
        showSlide(index);
    });
});