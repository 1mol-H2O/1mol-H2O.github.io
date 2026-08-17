class timeAssemble {
	year;
	month;
	day;
	hours;
	minutes;
	seconds;
	milliseconds;
	yearStr;
	monthStr;
	dayStr;
	hourStr;
	minuteStr;
	secondStr;
	millisecondStr;
	constructor(yy, mm, dd, hh, mi, ss, ms) {
		this.year = yy;
		this.month = mm;
		this.day = dd;
		this.hours = hh;
		this.minutes = mi;
		this.seconds = ss;
		this.milliseconds = ms;
		this.yearStr = yy.toString();
		this.monthStr = ('0' + (mm).toString()).slice(-2);
		this.dayStr = ('0' + dd.toString()).slice(-2);
		this.hourStr = ('0' + hh.toString()).slice(-2);
		this.minuteStr = ('0' + mi.toString()).slice(-2);
		this.secondStr = ('0' + ss.toString()).slice(-2);
		this.millisecondStr = ('00' + ms.toString()).slice(-3);
	}
	getDT() {
		let date = new Date();
		let dt = new timeAssemble(date.getFullYear(),
			date.getMonth() + 1,
			// 0 - 11 代表 1 - 12 月
			date.getDate(),
			date.getHours(),
			date.getMinutes(),
			date.getSeconds(),
			date.getMilliseconds());
		return dt;
	}
	getUnixTime() {
		return Date.now();
	}
	getFormatDate() {
		let dat = this.getDT();
		return dat.yearStr + '-' + dat.monthStr + '-' + dat.dayStr;
	}
	getFormatTime() {
		let dat = this.getDT();
		return dat.hourStr + ':' + dat.minuteStr + ':' + dat.secondStr;
	}
}
let timeAss = new timeAssemble(2026, 6, 14, 0, 0, 0, 0);

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

async function urlFetch(url) {
	return fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP响应错误: ${response.status}`);
				logError(`${url} 响应错误：${response.status}`);
			}
			logInfo(`${url} 已响应.`);
			return response.text();
		})
		.catch((error) => {
			logError(`请求 ${url} 失败：${error}`);
		});
}

function randomInt(min, max) {
	// 返回 [min,max] 之间的随机整数
	return Math.floor(Math.random() * (max - min + 1)) + min;
}