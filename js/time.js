let tEnum = {
    year: 2026,
    month: 6,
    day: 14,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    getDT: function () {
        let date = new Date();
        year = date.getFullYear();
        month = date.getMonth() + 1;
        // 0 - 11 代表 1 - 12 月
        day = date.getDate();
        hours = date.getHours();
        minutes = date.getMinutes();
        seconds = date.getSeconds();
    }
};