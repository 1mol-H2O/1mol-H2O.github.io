const imageFiles = ['1.png', '2.jpg', '3.webp', '4.webp', '5.webp', '6.png', '7.jpg', '8.png', '9.jpeg'];
const num = Math.floor(Math.random() * imageFiles.length);
document.body.style.backgroundImage = `url('resource/image/background/${imageFiles[num]}')`;
