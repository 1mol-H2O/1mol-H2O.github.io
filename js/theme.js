function LightTheme() {
    document.body.classList.add('light-theme');
    logInfoUpd(changeTheme, '切换到浅色模式.');
}

function DarkTheme() {
    document.body.classList.remove('dark-theme');
    logInfoUpd(changeTheme, '切换到深色模式.');
}

function AutoSunTheme() {
    const hour = new Date().getHours();
}

function AutoSysTheme() {
    const darkModeQuery = window.matchMedia('prefers-color-scheme: dark');
    // 创建媒体查询对象
    logInfoUpd(changeTheme, '主题跟随系统.');
    if (darkModeQuery.matches) {
        // Dark Mode
        DarkTheme();
    } else {
        // Light Mode
        LightTheme();
    }
    darkModeQuery.addEventListener('change', function (event) {
        // 监听系统主题切换
        if (event.matches) {
            // Dark Mode
            DarkTheme();
        } else {
            // Light Mode
            LightTheme();
        }
    });
}

function SwitchTheme() {
    document.body.classList.toggle('dark-theme');
}