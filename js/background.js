const FileType = Math.random() < 0.5 ? 'avif' : 'webp';
const num = Math.floor(Math.random() * 8) + 1;
document.body.style.backgroundImage = `url('resource/image/background/.${FileType}/${num}.${FileType}')`;