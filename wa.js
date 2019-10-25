function drawGrayscaleBitmap(ctx,bitmap) {
    for(var it = 0; it < numPx; it++)
    {
        for(var jt = 0; jt < numPx; jt++)
        {
            var value = bitmap[it][jt];
            var part = Number(parseInt( value , 10)).toString(16);
            if(part.length <2 )
            {
                part = "0"+part;
            }
            var color = '#' + part+part+part;
            ctx.fillStyle=color;
            ctx.fillRect(it,jt,1,1);
        }
    }
}

function makeTestImage(numPx) {
  var image = math.zeros(numPx,numPx);
  for(var it = 0; it < numPx; it++) {
    for(var jt = 0; jt < numPx; jt++) {
      image._data[it][jt] = it+jt
    }
  }
  return image
}

var numPx = 512
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
canvas.width = numPx;
canvas.height = numPx;

var image = makeTestImage(numPx)

drawGrayscaleBitmap(ctx,image._data);

WebAssembly.instantiateStreaming(fetch('test.wasm'))
.then(obj => {
  // Call an exported function:
  console.log(obj.instance.exports.add(40,2));
})

