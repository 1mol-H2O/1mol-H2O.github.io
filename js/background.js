let bgInfo = {};

urlFetch('resource/image/background/bgInfo.json')
    .then((data) => {
        // 获取背景信息
        bgInfo = JSON.parse(data);
        if (bgInfo.count < 1) logWarn('无背景：bgInfo.json 文件为空.');
        bgImageProcess(bgInfo);
    });

async function bgImageProcess() {
    // 加载背景
    const ft = (bgInfo.info || [])[randomInt(0, bgInfo.count - 1)];
    if (!ft) logWarn('无背景：bgInfo.json 文件格式错误.');
    // || [] 防止 bgInfo.info 不存在
    const bgfName = `${randomInt(1, ft.count)}.${ft.type}`
    body.style.backgroundImage = `url(resource/image/background/${ft.type}/${bgfName})`;
    // 以后真的不要再用“.***”的格式命名文件夹了，会出事的呜呜呜^……
    logInfoUpd('logBGChange', `更改背景：${bgfName}`);
}

mainPH.addEventListener("click", function () {
    bgImageProcess();
});

bgOlPH.addEventListener("click", function () {
    bgImageProcess();
});
