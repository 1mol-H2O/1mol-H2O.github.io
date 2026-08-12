let audioInfo;

async function audioInfoFetch() {
    // async：asynchronous 异步函数
    const requestUrl = 'resource/audio/audioInfo.json';
    console.log(`向 ${requestUrl} 发送请求...`);
    // 请求的目标链接
    const request = new Request(requestUrl);
    console.log(`正在等待 ${requestUrl} 响应...`);
    // 向链接发送请求
    const response = await fetch(request);
    console.log(`${requestUrl} 已响应...`);
    // 获取响应
    audioInfo = await response.json();
    console.log(`${requestUrl} 响应内容已解析...`);
    // 获取响应内容
}


function audioNameOverflow() {
    const box = document.querySelector('.AudioNameScrollBox');
    const text = document.querySelector('.AudioName');
    text.textContent = audioInfo[Math.floor(Math.random() * audioInfo.infoCount)].name
        + ' - ' + audioInfo[Math.floor(Math.random() * audioInfo.infoCount)].author;
    // 格式： 歌曲名 - 歌手名

    if (text.scrollWidth <= box.clientWidth) {
        // 如果歌曲名称的宽度小于容器的宽度，则不滚动
        text.style.animation = 'none';
        return;
    }
    // 如果歌曲名称的宽度大于容器的宽度，计算滚动时间
    text.style.animationDuration = `${text.scrollWidth / 50}s`; // 每 50px 用 1s
}

window.audioNameOverflow();