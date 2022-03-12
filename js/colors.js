import { getRandomNumber } from './utils.js';

const COLORS1 =  ['#F3DA0B', '#00BB2D', '#A18594', '#1D334A', '#008F39', '#75151E', '#A5A5A5', '#E4A010', '#2271B3', '#B32428', '#0A0A0A', '#79553D', '#CB3234', '#282828', '#FFFFFF', '#587246', '#EAE6CA', '#592321', '#025669', '#4D5645', '#4E5452', ];






function paintColors(el) {
  console.log(`#${getRandomColor()}`);
  el.innerHTML = COLORS.map(color => `<div class="color" style="background-color:${color}"></div>`).join('');
}





function getRandomColor() {
  const r = getRandomNumber(0,255);
  const g = getRandomNumber(0,255);
  const b = getRandomNumber(0,255);
  
  const color = `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`
  return color;
}




function getRandomColors(total) {
  const list = [];
  for (let i=0; i < total; i++) {
    list.push(getRandomColor());
  }
  return list;
}





const COLORS = getRandomColors(5000);
console.log(COLORS);

export {
  paintColors
}