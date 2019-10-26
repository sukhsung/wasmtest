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

var numPx = 256
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
canvas.width = numPx;
canvas.height = numPx;

Module.onRuntimeInitialized = function() {
  let arrayPointer
  let arrayData =[]
  let imData = []
  arrayPointer = Module.ccall("createTestImage", "number", ["number"], [numPx])
  
  for (let j=0; j<numPx;j++) {
    for (let i=0; i<numPx; i++) {
      arrayData.push(Module.HEAPF32[arrayPointer/Float32Array.BYTES_PER_ELEMENT+i +numPx*j])
    }
    imData.push(arrayData)
    arrayData = []
  }
  console.log(imData)
  drawGrayscaleBitmap(ctx,imData);
}
