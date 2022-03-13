function drawSingleFrame(ctx, video) {
  ctx.drawImage(video,0,0);
}

function getImage(canvas) {
  // const index = canvas.dataset.frame;
  // console.log(index);
  // const img = document.querySelector('.js__frame--' + index);
  const dataURL = canvas.toDataURL();
  // img.setAttribute('src', dataURL);
  return dataURL;
}


export {
  drawSingleFrame,
  getImage
}