const body = document.querySelector('body');
const video = body.querySelector('#video');
const dimensions = body.querySelector('#dimensions');
const duration = body.querySelector('#duration');
const videoUploader = body.querySelector('.js__file-field');





function getDimensions(player) {
  return `${player.videoWidth}x${player.videoHeight}`;
}





function getDuration(player) {
  const { duration } = player;
  const time = new Date(duration * 1000).toISOString().substring(11, 19);

  return time;
}





function playSelectedFile(event) {
  const field = event.currentTarget;
  const file = field.files[0];
  const { type } = file;
  console.log({type});


  const canPlay = !!video.canPlayType(type);
  if (!canPlay) {
    console.error(`Can't play type: ${type}`);
    return;
  }

  const fileURL = URL.createObjectURL(file);
  video.src = fileURL;
}





video.addEventListener('loadedmetadata', () => {
  dimensions.innerHTML = getDimensions(video);
  duration.innerHTML = getDuration(video);
});

videoUploader.addEventListener('change', playSelectedFile);