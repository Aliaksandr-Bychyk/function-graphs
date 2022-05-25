import drawCanvas from "./drawCanvas.js";

export default function drawGraph(key) {

  let canvas = document.querySelector('canvas');
  let ctx = canvas.getContext('2d');
  let scale = 40;

  let y;
  drawCanvas();

  let inputs = document.querySelectorAll('input');

  switch (key) {
    case 0:
      y = function(x) {
        return inputs[0].value * x + inputs[1].value;
      }
      break;
    case 1:
      y = function(x) {
        return inputs[0].value * Math.pow(x, 2) + inputs[1].value * x + inputs[2].value;
      }
      break;
    case 2:
      y = function(x) {
        return Math.pow(x, inputs[0].value);
      }
      break;
    case 3:
      y = function(x) {
        return Math.pow(inputs[0].value, x);
      }
      break;
    case 4:
      y = function(x) {
        return Math.log(x) / Math.log(inputs[0].value);
      }
      break;
    case 5:
      y = function(x) {
        return Math.sin(x);
      }
      break;
    case 6:
      y = function(x) {
        return Math.cos(x);
      }
      break;
    case 7:
      y = function(x) {
        return Math.tan(x);
      }
      break;
    case 8:
      y = function(x) {
        return 1 / Math.tan(x);
      }
      break;
  }

  ctx.strokeStyle = "red";
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (var i = -7; i <= 7; i += 0.2) {
    ctx[i?'lineTo':'moveTo'](i*scale, -y(i)*scale);
  }
  ctx.stroke();
  
  
  // var axes={};
  // axes.x0 = .5 + .5*canvas.width;  // x0 pixels from left to x=0
  // axes.y0 = .5 + .5*canvas.height; // y0 pixels from top to y=0
  // axes.scale = 40;                 // 40 pixels from x=0 to x=1
  // axes.doNegativeX = true;
  // funGraph(ctx,axes,y,"rgb(11,153,11)",1);

  // function funGraph (ctx,axes,func,color,thick) {
  //   var xx, yy, dx=4, x0=axes.x0, y0=axes.y0, scale=axes.scale;
  //   var iMax = Math.round((ctx.canvas.width-x0)/dx);
  //   var iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;
  //   ctx.beginPath();
  //   ctx.lineWidth = thick;
  //   ctx.strokeStyle = color;
   
  //   for (var i=iMin;i<=iMax;i++) {
  //    xx = dx*i; yy = scale*func(xx/scale);
  //    if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
  //    else         ctx.lineTo(x0+xx,y0-yy);
  //   }
  //   ctx.stroke();
  //  }

  

}