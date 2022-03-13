import { paintColors } from './colors.js';
import { 
  resizeCanvas, 
  getDimensions, 
  getDuration, 
  playSelectedFile, 
  gotoTime,
  getTimestamps
} from './video.js';
import { 
  drawSingleFrame,
  getImage
} from './canvas.js';

const FORMAT = {
  width: 1080,
  height: 1080,
  total: 5
};

let timestamps = [];
const captures = [];

const body = document.querySelector('body');
const video = body.querySelector('#video');
const dimensions = body.querySelector('#dimensions');
const duration = body.querySelector('#duration');
const videoUploader = body.querySelector('.js__file-field');
const colors = body.querySelector('.js__colors');
const videoCapture = body.querySelector('#videoCapture');
const videoContext = videoCapture.getContext('2d');
const img = body.querySelector('.js__frame-0');
const frames = body.querySelector('.js__frames');


function createFrames(captures, el) {
  let result = '';

  for (let i=0; i < captures.length; i++) {
    result += `
    <li class="frame frame--${i}">
      <img src="${captures[i]}" alt="" width="100" class="frame-img js__frame--${i}">
    </li>`;
  }
  el.innerHTML = result;
}


video.addEventListener('loadedmetadata', () => {
  const {width, height} = getDimensions(video);  
  dimensions.innerHTML = `${width}x${height}`;
  duration.innerHTML = getDuration(video);
  resizeCanvas(videoCapture, width, height);

  timestamps = getTimestamps(video.duration, FORMAT.total);
  let i = 0;
  const pase = setInterval(()=>{
    video.currentTime = timestamps[i];
    console.log(i);
    if (i<FORMAT.total - 1 ) {
      i++;
    } else {
      clearInterval(pase);
      createFrames(captures, frames);
    }
  }, 200);
  
  
});

video.addEventListener('seeked', () => {
  drawSingleFrame(videoContext, video);
  captures.push(getImage(videoCapture));
});


videoUploader.addEventListener('change', playSelectedFile);

//paintColors(colors);