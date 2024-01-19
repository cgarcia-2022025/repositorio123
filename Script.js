
function area(){
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 68, 25, 0, 2 * Math.PI);
ctx.stroke();
var a = document.getElementById("myCanvas");
var ctx = a.getContext("2d");
ctx.beginPath()
ctx.lineWidth=4
ctx.moveTo(25, 25)
ctx.lineTo(100,25)
ctx.lineTo(100,40)
ctx.moveTo(25,25)
ctx.lineTo(25,150)
ctx.stroke()
var b = document.getElementById("myCanvas");
ctx.beginPath()
ctx.lineWidth=2
ctx.moveTo(100,95)
ctx.lineCap='round'
ctx.lineTo(100,115)
ctx.stroke()
}
