(function() {
  const video = document.querySelector('#video1');
  const playButton = document.querySelector('#play');

  console.dir(video);
  function playPause() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  playButton.addEventListener('click', playPause);
})();
