const btnPlay = document.querySelector('.video__button-play');
const videoPlayer =document.querySelector('.video__player');

btnPlay.addEventListener('click', playVideo);

function playVideo(){
    btnPlay.style.visibility = 'hidden';

    videoPlayer.style.visibility = 'visible';
    videoPlayer.controls = true;
    videoPlayer.play();
}