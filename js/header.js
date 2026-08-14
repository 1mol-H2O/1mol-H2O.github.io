document.getElementById("tipBar").addEventListener("click", function () {
    // 点击时隐藏提示栏
    headPH.style.marginTop = `-${header.offsetHeight}px`;
    console.log("提示栏已隐藏.");
});