let points = [];
function drawCanvas() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, 300, 300);
  drawTriangle(ctx);
  drawPoints(ctx)
}
function drawTriangle(ctx) {
  ctx.fillStyle = "#1A2B3C";
  ctx.moveTo(150, 50);
  ctx.lineTo(200, 150);
  ctx.lineTo(100, 150);
  ctx.lineTo(150, 50);
  ctx.stroke();
}
function drawPoints(ctx) {
  ctx.fillStyle = "#5A3C2F";
  for (let i = 0; i < points.length; i++) {
    let point = points[i];
    ctx.beginPath();
    ctx.arc(point[0], point[1], 5, 0, 2*Math.PI, false);
    ctx.fill()
    ctx.stroke()
  }
}
function onClick(event) {
  var rect = event.target.getBoundingClientRect();
  var x = event.clientX - rect.left; //x position within the element.
  var y = event.clientY - rect.top;  //y position within the element.
  points.push([x, y]);
  drawCanvas();
}
drawCanvas();
document.getElementById("canvas").addEventListener("click", onClick);
