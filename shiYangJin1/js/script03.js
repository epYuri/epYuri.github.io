function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main01() {
    setTimeout(() => {
        console.log("兄弟你输了");
        window.location.href = 'pages/LOSE.html';
    }, 15000);
    gsap.to(player, {
        opacity: 1,
        duration: 0.5
    });
    gsap.to(player, {
        x: 200,
        y: 0,
        duration: 2,
        // delay: 0.5,
        ease: "power1.inOut"
    });
    await sleep(2500);  // 暂停2秒
    gsap.to(dhk, {
        opacity: 1,
        duration: 0.5
    });
    await sleep(1000);
    const rd = Math.random() < 0.5 ? 0 : 1;
    if (rd) {
        gsap.to(pi01, {
            opacity: 1,
            duration: 0.5
        });
    } else {
        gsap.to(pi02, {
            opacity: 1,
            duration: 0.5
        });
    }
    await new Promise(resolve => {
        const clickHandler = () => {
            document.removeEventListener('click', clickHandler);
            resolve();
        };
        document.addEventListener('click', clickHandler);
    });
    if (rd) {
        gsap.to(pi01, {
            x: -155,
            y: -60,
            duration: 1,
            // delay: 0.5,
            ease: "linear"
        });
        await sleep(1000);
        gsap.to(pi01, {
            opacity: 0,
            duration: 0.5
        });
    } else {
        gsap.to(pi02, {
            x: -155,
            y: -60,
            duration: 1,
            // delay: 0.5,
            ease: "linear"
        });
        await sleep(1000);
        gsap.to(pi02, {
            opacity: 0,
            duration: 0.5
        });
    }
    await sleep(1000);
    if (!rd) {
        gsap.to(pi01, {
            opacity: 1,
            duration: 0.5
        });
    } else {
        gsap.to(pi02, {
            opacity: 1,
            duration: 0.5
        });
    }
    await new Promise(resolve => {
        const clickHandler = () => {
            document.removeEventListener('click', clickHandler);
            resolve();
        };
        document.addEventListener('click', clickHandler);
    });
    if (!rd) {
        gsap.to(pi01, {
            x: 155,
            y: -60,
            duration: 1,
            // delay: 0.5,
            ease: "linear"
        });
        await sleep(1000);
        gsap.to(pi01, {
            opacity: 0,
            duration: 0.5
        });
    } else {
        gsap.to(pi02, {
            x: 155,
            y: -60,
            duration: 1,
            // delay: 0.5,
            ease: "linear"
        });
        await sleep(1000);
        gsap.to(pi02, {
            opacity: 0,
            duration: 0.5
        });
    }
    await sleep(1200);
    window.location.href = 'pages/WIN.html';
}

document.getElementById('start-game-btn')?.addEventListener('click', function () {
    // 6.5 秒后执行目标函数
    setTimeout(function () {
        main01();
    }, 6000);
});
