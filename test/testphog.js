var fs = require("fs"),
    assert = require("assert"),
    Canvas = require("canvas");
    hog = require("../hog");

var canvas = drawImgToCanvasSync(__dirname + "/beachball.jpg");

var descriptor;
descriptor = hog.extractPHOG(canvas, {
    cellSize: 4,
    blockSize: 2,
    blockStride: 1,
    bins: 4,
    levels: 3,
    norm: "L1"
  });
console.log(descriptor)

function dataToCanvas(imagedata) {
  img = new Canvas.Image();
  img.src = new Buffer(imagedata, 'binary');

  var canvas = new Canvas(img.width, img.height);
  var ctx = canvas.getContext('2d');
  ctx.patternQuality = "best";

  ctx.drawImage(img, 0, 0, img.width, img.height,
    0, 0, img.width, img.height);
  return canvas;
}

function drawImgToCanvasSync(file) {
  var data = fs.readFileSync(file)
  var canvas = dataToCanvas(data);
  return canvas;
}
