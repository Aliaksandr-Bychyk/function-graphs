export default function drawCanvas() {
  let canvas = document.querySelector('canvas');
  canvas.width = 500;
  canvas.height = 500; 

  let ctx = canvas.getContext('2d');
  ctx.clearRect(-500, -500, 1000, 1000);
  let scale = 40;

  // center point 0
  ctx.translate(canvas.width/2, canvas.height/2);
  
  // headlines
  // x
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black'
  ctx.beginPath();
  ctx.moveTo(- canvas.width, 0);
  ctx.lineTo(canvas.width, 0);
  ctx.stroke();
  // y
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black'
  ctx.beginPath();
  ctx.moveTo(0, - canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.stroke();

  //grid
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  for (let x = -6; x <= 6; x++) {
    ctx.moveTo(x*scale, -canvas.height/2);
    ctx.lineTo(x*scale, canvas.height/2);
    ctx.moveTo(-canvas.width/2, x*scale);
    ctx.lineTo(canvas.width/2, x*scale);
  }
  ctx.stroke();
}