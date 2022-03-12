function resizeCanvas(el, width, height) {
  el.width = width;
  el.height = height;
}


function getDimensions(player) {
  return {
    width: player.videoWidth,
    height: player.videoHeight
  };
}


function getDuration(player) {
  const { duration } = player;
  const time = new Date(duration * 1000).toISOString().substring(11, 19);

  return time;
}


function gotoTime(video, time) {
  const { duration } = video;
  const newTime = (time >=0 && time <= duration) ? time : 0;
  video.currentTime = newTime;
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


export {
  resizeCanvas,
  getDimensions,
  getDuration,
  playSelectedFile,
  gotoTime,
}