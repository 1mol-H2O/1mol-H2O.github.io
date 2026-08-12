window.console.log("background.js 已加载.");

function bgImageRandom() {
    const FileType = Math.random() < 0.5 ? 'avif' : 'webp';
    const num = Math.ceil(Math.random() * 8);
    document.body.style.backgroundImage = `url('resource/image/background/${FileType}/${num}.${FileType}')`;
    // 以后真的不要再用“.***”的格式命名文件夹了，会出事的呜呜呜^……
}

let bgOverlay = document.querySelector(".bg-overlay");

bgOverlay.addEventListener("click", function () {
    bgImageRandom();
});

window.bgImageRandom();
