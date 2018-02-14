(function() {
  const video = document.querySelector('#video1');
  const playButton = document.querySelector('#play');
  const speedUp = document.querySelector('#speedup');
  const speedDown = document.querySelector('#speeddown');
  const volumeUp = document.querySelector('#volumeup');
  const volumeDown = document.querySelector('#volumedown');
  const playbackRate = document.querySelector('#playbackrate');
  const volumeRate = document.querySelector('#volumerate');

  function showData() {
    playbackRate.innerHTML = video.playbackRate;
    volumeRate.innerHTML = video.volume * 100 + '%';
  }

  function playPause() {
    if (video.paused) {
      video.play();
      playButton.innerHTML = 'Pause';
    } else {
      video.pause();
      playButton.innerHTML = 'Play';
    }
  }

  function changeSpeed(direction) {
    if (direction === 'up' && video.playbackRate !== 3) {
      video.playbackRate += 0.5;
    }
    if (direction === 'down' && video.playbackRate !== 0.5) {
      video.playbackRate -= 0.5;
    }
    showData();
  }

  function changeVolume(direction) {
    if (direction === 'up') {
      if (video.volume === 1) {
        volumeUp.disabled = true;
        return;
      }
      video.volume = (video.volume + 0.1).toFixed(2);
      volumeDown.disabled = false;
    }
    if (direction === 'down') {
      if (video.volume === 0) {
        volumeDown.disabled = true;
      }
      video.volume = (video.volume - 0.1).toFixed(2);
      volumeUp.disabled = false;
    }
    showData();
  }

  showData();

  playButton.addEventListener('click', playPause);
  speedUp.addEventListener('click', () => changeSpeed('up'));
  speedDown.addEventListener('click', () => changeSpeed('down'));
  volumeUp.addEventListener('click', () => changeVolume('up'));
  volumeDown.addEventListener('click', () => changeVolume('down'));
})();
