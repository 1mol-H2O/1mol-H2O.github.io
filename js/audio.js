let audioInfo = {};
let audioId = 0;

const audioName = document.getElementById('audioName');
const audioCover = document.getElementById('audioCover');
const audioBox = document.getElementById('audioBox');
const audioCoverDefaultFilter = audioCover.style.filter;

const audioLast = document.getElementById('audioLast');
const audioBackward = document.getElementById('audioBackward');
const audioPlay = document.getElementById('audioPlay');
const audioForward = document.getElementById('audioForward');
const audioNext = document.getElementById('audioNext');
const audioVolUp = document.getElementById('audioVolumeUp');
const audioVolDown = document.getElementById('audioVolumeDown');
const audioVolMute = document.getElementById('audioVolumeMute');

urlFetch('resource/audio/audioInfo.json')
	.then((data) => {
		audioInfo = JSON.parse(data);
		audioId = randomInt(0, audioInfo.count - 1);
		// 初始随机选择，json 数组下标从 0 开始
		audioProcess(audioId);
	});

let audio = new Audio();
function audioProcess(id) {
	const info = (audioInfo.info || [])[id];
	audio = new Audio(`resource/audio/${info.name}.${info.type}`);
	audioEventBinder(audio);
	// 当 new Audio() 时，需要重新绑定监听事件
	audio.preload = 'auto';
	// auto 加载整个文件
	// metadata 加载元信息，并不会加载文件
	// none 不加载，不缓存
	const content = info.name + ' - ' + info.author
	// 格式： 歌曲名 - 歌手名
	audioName.innerHTML = content;
	if (audioName.scrollWidth <= audioBox.clientWidth) {
		// 如果歌曲名称的宽度小于容器的宽度，则不滚动
		audioName.style.animation = 'none';
	} else {
		// 如果歌曲名称的宽度大于容器的宽度，计算滚动时间
		audioName.style.animationName = 'AudioNameScroll';
		audioName.style.animationDuration = `${audioName.scrollWidth / 50}s`; // 每 50px 用 1s
	}
	const cover = (info.cover == "")
		? "resource/icon/default/media/music.svg"
		: `resource/audio/cover/${info.cover}`;
	audioCover.src = cover;
	audio.loop = false; // 循环播放
	audio.playbackRate = 1; // 播放速率
	console.log(`加载完成，正在播放：${content}，时长：${audio.duration}s`);
}

function audioEventBinder(audio) {
	// 重新绑定 audio 事件
	audio.addEventListener('loadstart', audioLoadStartE);
	audio.addEventListener('progress', audioProgressE);
	audio.addEventListener('canplaythrough', audioCanPlayThroughE);
	audio.addEventListener('play', audioPlayE);
	audio.addEventListener('pause', audioPauseE);
	audio.addEventListener('ended', audioEndedE);
	audio.addEventListener('timeupdate', audioTimeUpdateE);
}

function audioLoadStartE() {
	audioPlay.src = "resource/icon/default/media/play.svg";
	audioPlay.style.opacity = 0.5;
	audioPlay.style.pointerEvents = 'none';
	console.log('加载音频文件...');
}
function audioProgressE() {
	if (audio.buffered.length > 0) {
		const now = audio.buffered.end(audio.buffered.length - 1);
		const all = audio.duration;
		if (all > 0) {
			const percent = (now / all) * 100;
			console.log(`已缓冲：${percent.toFixed(2)}%`);
			// toFixed() 精确两位小数
		}
	} else {

	}
}
function audioCanPlayThroughE() {
	audioPlay.src = "resource/icon/default/media/pause.svg";
	audioPlay.style.opacity = 1;
	audioPlay.style.pointerEvents = 'auto';
	console.log('播放条件允许.');
	audio.play().catch((error) => {
		console.warn(`播放失败：${error}，尝试重载...`);
		audio.load(); // 加载音频
		setTimeout(() => {
			audio.play().catch((error) => {
				console.error(`重载失败：${error}`);
			});
		}, 1000);
	}); // 开始播放
}
function audioPlayE() {
	audioPlay.src = "resource/icon/default/media/pause.svg";
	audioCover.style.filter = audioCoverDefaultFilter;
	console.log('恢复播放.');
}
function audioPauseE() {
	audioPlay.src = "resource/icon/default/media/play.svg";
	audioCover.style.filter = `brightness(80%)`;
	console.log('暂停播放.');
}
function audioEndedE() {
	console.log('播放结束.');
}
function audioTimeUpdateE() {

}

audioLast.addEventListener('click', function () {
	audioId = (audioId + audioInfo.count - 1) % audioInfo.count;
	audio.pause();
	audioProcess(audioId);
	console.log('上一首.');
});
audioBackward.addEventListener('click', function () {

});
audioPlay.addEventListener('click', function () {
	if (audio.paused) audio.play(); // 暂停
	else audio.pause(); // 播放
});
audioForward.addEventListener('click', function () {
});
audioNext.addEventListener('click', function () {
	audioId = (audioId + 1) % audioInfo.count;
	audio.pause();
	audioProcess(audioId);
	console.log('下一首.');
});
audioVolUp.addEventListener('click', function () {

});
audioVolDown.addEventListener('click', function () {

});
audioVolMute.addEventListener('click', function () {

});