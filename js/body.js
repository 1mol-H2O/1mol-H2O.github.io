// 本 .js 文件用于引入 <head>，不得引用外部文件，必须写死！
fillIn('public/bg-overlay.html', 'bgOverlayPlaceHolder');
fillIn('public/header.html', 'headerPlaceHolder');
fillIn('public/nav.html', 'navPlaceHolder');
fillIn('public/footer.html', 'footerPlaceHolder');

function fillIn(targetUrl, targetId) {
    // 加载元素
    fetch(targetUrl)
        .then((response) => {
            if (!response.ok) {
                // 响应失败
                throw new Error(`${targetUrl} HTTPS响应错误：${response.status}`);
            }
            // 响应成功
            console.log(`${targetUrl} 已加载.`);
            return response.text();
        })
        .then((data) => {
            // 处理响应数据：将数据填充到目标网页 div 中
            document.getElementById(targetId).innerHTML = data;
            console.log(`${targetId} 元素已填充.`);
        })
        .catch((error) => {
            // 处理错误
            console.error(`请求网页数据失败：${error}`);
        });
};