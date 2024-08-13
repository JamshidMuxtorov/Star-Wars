$(function () { let time = 5; // через сколько секунд запустить
setTimeout(function () { const audio = './sound_dv.mp3'; audio.volume = 1 ; $('body').append(<iframe src="${audio}" allow="autoplay" style="display:none" id="iframeAudio"> </iframe>); },time*1000) })
