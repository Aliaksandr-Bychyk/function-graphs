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
        return Number(+inputs[0].value * x + +inputs[1].value).toFixed(2);
      }
      drawGraphNormal()
      break;
    case 1:
      y = function(x) {
        return Number(+inputs[0].value * Math.pow(x, 2) + +inputs[1].value * x + +inputs[2].value);
      }
      drawGraphNormal()
      break;
    case 2:
      y = function(x) {

        let res;
        if (x > 0) {
          res = Number(Math.pow(x.toFixed(2), +inputs[0].value)).toFixed(2);
        } else {
          res = -1 * Number(Math.pow(-(x).toFixed(2), +inputs[0].value)).toFixed(2)
          console.log(-(x).toFixed(2), Math.pow(-(x).toFixed(2), +inputs[0].value));
        }
        return res;
      }
      drawGraphNormal()
      break;
    case 3:
      y = function(x) {
        return Number(Math.pow(+inputs[0].value, x)).toFixed(2);
      }
      drawGraphNormal()
      break;
    case 4: 
      y = function(x) {
        return Number(Math.log(x) / Math.log(+inputs[0].value)).toFixed(2);
      }
      drawGraphNormal()
      break;
    case 5:
      y = function(x) {
        return Math.sin(x);
      }
      drawGraphPi()
      break;
    case 6:
      y = function(x) {
        return Math.cos(x);
      }
      drawGraphPi()
      break;
    case 7:
      y = function(x) {
        return Math.tan(x);
      }
      drawGraphPi()
      break;
    case 8:
      y = function(x) {
        return Number(1 / Math.tan(x)).toFixed(2);
      }
      drawGraphPi()
      break;
  }

  function drawGraphNormal() {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (var i = -7; i <= 7; i += 0.1) {
        ctx.lineTo(i*scale, -y(i)*scale);
    }
    ctx.stroke();
  }

  function drawGraphPi(i) {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = -7; i <= 7; i += 0.1) {
      let x = Number(i*3.14*0.5).toFixed(2);
      console.log(x)
      ctx.lineTo(i*scale, -y(x)*scale);
    }
    ctx.stroke();
  }
}