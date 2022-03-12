import { paintColors } from './colors.js';
import { 
  resizeCanvas, 
  getDimensions, 
  getDuration, 
  playSelectedFile, 
  gotoTime 
} from './video.js';
import { drawSingleFrame } from './canvas.js';

const body = document.querySelector('body');
const video = body.querySelector('#video');
const dimensions = body.querySelector('#dimensions');
const duration = body.querySelector('#duration');
const videoUploader = body.querySelector('.js__file-field');
const colors = body.querySelector('.js__colors');
const videoCapture = body.querySelector('#videoCapture');
const videoContext = videoCapture.getContext('2d');




video.addEventListener('loadedmetadata', () => {
  const {width, height} = getDimensions(video);  
  dimensions.innerHTML = `${width}x${height}`;
  duration.innerHTML = getDuration(video);
  resizeCanvas(videoCapture, width, height);

  gotoTime(video, 45);
});

video.addEventListener('seeked', () => {
  drawSingleFrame(videoContext, video);
})

videoUploader.addEventListener('change', playSelectedFile);
//paintColors(colors);