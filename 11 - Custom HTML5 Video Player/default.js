/*Get Elements*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = document.getElementById('fullscreen');

/*Build functions*/
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    //console.log(method);
    video[method]();
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    //console.log(icon);
    toggle.textContent = icon;
}

function skip(){
    //console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
    //console.log(this.name)
    //console.log(this.value)
};

function handleProgress(){
    const percent = (video.currentTime * 100) / video.duration;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    //console.log(scrubTime);
    video.currentTime = scrubTime;
    //console.log(e);
}

function enterFullscreen(){
    if (video.requestFullscreen) 
        video.requestFullscreen();
    else if (video.webkitRequestFullscreen) 
        video.webkitRequestFullscreen();
    else if (video.msRequestFullScreen) 
        video.msRequestFullScreen();
}

/*Hook up the event listeners*/
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip)); 

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
//apenas se o mousedown é true ele executa o scrub
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullscreen.addEventListener('click', enterFullscreen);