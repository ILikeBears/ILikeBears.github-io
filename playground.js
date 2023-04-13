function drawCanvas() {
  let canvas = document.getElementById("canvas")
  let ctx = canvas.getContext("2d")
  ctx.fillStyle = "#FFFFFF"
  ctx.fillRect(0, 0, 300, 300)
}
drawCanvas()
