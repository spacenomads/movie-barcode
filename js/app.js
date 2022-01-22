const body = document.querySelector('body');
const video = body.querySelector('#video');
const dimensions = body.querySelector('#dimensions');
const duration = body.querySelector('#duration');


function getDimensions(player) {
  return `${player.videoWidth}x${player.videoHeight}`;
}


function getDuration(player) {
  const { duration } = player;
  const time = new Date(duration * 1000).toISOString().substring(11, 19);

  return time;
}

console.log(video);

video.addEventListener('loadedmetadata', () => {
  dimensions.innerHTML = getDimensions(video);
  duration.innerHTML = getDuration(video);
});
