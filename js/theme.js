function LightTheme() {
    document.body.classList.add('dark-theme');
}

function DarkTheme() {
    document.body.classList.remove('dark-theme');
}

function AutoTheme() {
    const hour = new Date().getHours();
}

function SwitchTheme() {
    document.body.classList.toggle('dark-theme');
}