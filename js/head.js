// 本 .js 文件用于引入 <head>，不得引用外部文件，必须写死！
async function urlFetch(url) {
    // async：asynchronous 异步函数
    return fetch(url)
        // fetch 返回 Promise 对象，请求完成时变成 Response 对象
        .then((response) => {
            // 向链接发送请求
            // 箭头函数 => (abc) 直接返回 abc
            // 但 => {abc} 不返回，要写 return abc;
            if (!response.ok) {
                throw new Error(`HTTP响应错误: ${response.status}`);
            }
            console.log(`${url} 已响应.`);
            return response.text();
        })
        .catch((error) => {
            console.log(`请求 ${url} 失败：${error}`);
        });
}

urlFetch('public/head.html')
    .then((data) => {
        console.log(`head.html 已加载.`);
        // 调用 WebAPI：DOMParser，解析 HTML 字串
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        // DOMParser 接口解析 HTML 的唯一方法：从字符串转为 ducument 对象
        const elements = doc.head.children;
        console.log(`head.html 已解析：${elements.length}.`);
        // 提取 head 子元素
        for (let e of elements) {
            // 遍历子元素
            if (e.tagName === 'LINK' || e.tagName === 'META') {
                // 仅导入 script、link、meta 元素
                // deepseek 说要查重，但这是自己写的，懒得查重
                document.head.appendChild(e.cloneNode(true));
                console.log(`head.html 已填充：${e.tagName}.`);
                // 克隆节点，并添加到当前文档的 head 中
                // cloneNode(true) 表示深度克隆，即克隆节点及其子节点
                // cloneNode(false) 表示浅克隆，即仅克隆节点本身
                // 不克隆直接添加会导致添加的元素在 DOM 中出现两次
            } else if (e.tagName === 'SCRIPT') {
                // script 元素需要重新创建才可自动运行
                const script = document.createElement('script');
                // 创建 script 元素
                script.src = e.getAttribute('src');
                // .getAttribute('src') 相对路径，.src 绝对路径
                if (e.hasAttribute('defer')) script.defer = true;
                if (e.hasAttribute('async')) script.async = true;
                // 设置 defer/async 属性
                document.head.appendChild(script);
                // 添加到当前文档的 head 中
                console.log(`head.html 已新建：${e.tagName}.`);
            }
        }
        console.log(`head.html 填充完成.`);
    });