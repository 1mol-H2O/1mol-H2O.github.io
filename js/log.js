const infoBox = document.getElementById('infoBox');
const warnBox = document.getElementById('warnBox');
const errBox = document.getElementById('errBox');

logInfo('日志记录已开启.');

function logInfo(expr) {
    const log = document.createElement('p');
    log.innerHTML = `[${timeAss.getFormatTime()}] ${expr}`;
    log.id = `log${timeAss.getUnixTime()}`;
    infoBox.prepend(log);
    // 在首部添加子元素
    return log.id;
}

function logInfoUpd(id, expr) {
    const updLog = document.getElementById(id);
    if (updLog) {
        // 元素存在
        infoBox.removeChild(updLog);
        // 移除子元素
        updLog.innerHTML = `[${timeAss.getFormatTime()}] ${expr}`;
        infoBox.prepend(updLog);
    } else {
        // 元素不存在
        const log = document.createElement('p');
        log.innerHTML = `[${timeAss.getFormatTime()}] ${expr}`;
        log.id = id;
        infoBox.prepend(log);
    }
}

function logWarn(expr) {
    const log = document.createElement('p');
    log.innerHTML = `[${timeAss.getFormatTime()}] ${expr}`;
    log.id = `log${timeAss.getUnixTime()}`;
    warnBox.prepend(log);
    return log.id;
}

function logError(expr) {
    const log = document.createElement('p');
    log.innerHTML = `[${timeAss.getFormatTime()}] ${expr}`;
    log.id = `log${timeAss.getUnixTime()}`;
    errBox.prepend(log);
    return log.id;
}