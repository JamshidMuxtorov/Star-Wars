$(function () {

    let time = 5; // через сколько секунд запустить
   
    setTimeout(function () {
        const audio = './audio.mp3';
        document.querySelector("body").append(<iframe src="${audio}" allow="autoplay" style="display:none" id="iframeAudio"> </iframe>);
    },time*1000)


})
