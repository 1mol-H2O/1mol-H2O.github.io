function share(targetUrl, targetId) {
    fetch(targetUrl)
        .then((response) => {
            console.log(`正在加载 ${targetUrl}...`);
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

share('share/bg-overlay.html', 'bgOverlayPlaceHolder');
share('share/header.html', 'headerPlaceHolder');
share('share/nav.html', 'navPlaceHolder');
share('share/footer.html', 'footerPlaceHolder');