$(function () {

    let time = 5; // через сколько секунд запустить
   
    setTimeout(function () {
        const audio = 'https://www.soundboard.com/sb/sound/909998#google_vignette';
        document.querySelector("body").append(<iframe src="${audio}" allow="autoplay" style="display:none" id="iframeAudio"> </iframe>);
    },time*1000)


})
