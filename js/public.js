let timeAss = {
	year: 2026,
	month: 6,
	day: 14,
	hours: 0,
	minutes: 0,
	seconds: 0,
	milliseconds: 0,
	yearstr: '2026',
	monthstr: '06',
	daystr: '14',
	hourstr: '00',
	minutestr: '00',
	secondstr: '00',
	millisecondstr: '00',
	getDT: function () {
		let date = new Date();
		year = date.getFullYear();
		month = date.getMonth() + 1;
		// 0 - 11 代表 1 - 12 月
		day = date.getDate();
		hour = date.getHours();
		minute = date.getMinutes();
		second = date.getSeconds();
		millisecond = date.getMilliseconds();
		yearstr = year.toString();
		monthstr = ('0' + (month + 1).toString()).slice(-2);
		daystr = ('0' + day.toString()).slice(-2);
		hourstr = ('0' + hour.toString()).slice(-2);
		minutestr = ('0' + minute.toString()).slice(-2);
		secondstr = ('0' + second.toString()).slice(-2);
		millisecondstr = ('00' + millisecond.toString()).slice(-3);
	}
};

const head = document.head;
const body = document.body;
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const bgOlPH = document.getElementById('bgOverlayPlaceHolder');
const headPH = document.getElementById('headerPlaceHolder');
const navPH = document.getElementById('navPlaceHolder');
const mainPH = document.getElementById('mainPlaceHolder');
const footPH = document.getElementById('footerPlaceHolder');

function randomInt(min, max) {
	// 返回 [min,max] 之间的随机整数
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatTime(seconds) {
    
}