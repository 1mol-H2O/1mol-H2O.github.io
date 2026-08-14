timeAss.getDT();
const cuM = document.getElementById("currentMonth");
cuM.innerHTML = `${timeAss.yearstr}.${timeAss.monthstr}`;
// 通常来说 innerText 和 textContent 作用一致，但均不可渲染标签（例如<i></i>是直接输出）
// innerHTML 可以渲染标签（例如<i></i>）
// 插入用户输入的文本时必须用 textContent 或 innerText，以防 XSS 跨站脚本攻击

let footDp = true;
document.addEventListener("mousemove", function (event) {
    if (event.clientY + footer.offsetHeight < body.clientHeight) {
        if (footDp) {
            footPH.style.marginBottom = `-${footer.offsetHeight}px`;
            footDp = false;
            console.log("页脚已隐藏.");
        }
    } else {
        if (!footDp) {
            footPH.style.marginBottom = 0;
            footDp = true;
            console.log("页脚已显示.");
        }
    }
});
// 有关 client 元素辨析参考：https://blog.csdn.net/qq_37547964/article/details/120195441