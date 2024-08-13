$(function () { var time = 5; // через сколько секунд запустить
setTimeout(function () { const audio = 'http://soundbible.com/mp3/ice-cubes-glass-daniel_simon.mp3'; audio.volume = 1 ; $('body').append(<iframe src="${audio}" allow="autoplay" style="display:none" id="iframeAudio"> </iframe>); },time*1000) })
