const audio = document.querySelector('.audioControl');
const progress = document.getElementById('progress');
const playBtn = document.querySelector('.ctrl-play');
const backwardBtn = document.querySelector('.ctrl-back');
const forwardBtn = document.querySelector('.ctrl-forward');


// Play/Pause âm thanh
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
    } else {
        audio.pause();
        playBtn.classList.add('fa-play');
        playBtn.classList.remove('fa-pause');
    }
});

// Cập nhật thanh tiến trình khi âm thanh phát
audio.ontimeupdate = () => {
    if (audio.duration) {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progress.value = progressPercent;
      progress.max = audio.duration;
    }
  };
  
  // Thay đổi thời gian phát khi kéo thanh trượt
  progress.addEventListener('input', () => {
    if (audio.duration) {
      audio.currentTime = (progress.value / 100) * audio.duration;
    }
  });
  
// Tua lại 10 giây
backwardBtn.addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
});

// Tua tới 10 giây
forwardBtn.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});
