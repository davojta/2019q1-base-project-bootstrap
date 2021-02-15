module.exports.drawOnCanvas = ({ style, x1, y1, x2, y2 }) => {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = style;
    ctx.fillRect(x1, y1, x2, y2);
}


module.exports.draw = (frame, drawOnCanvas) => {
  console.log('frame', frame);
    frame.forEach((row, i) => {
        row.forEach((column, j) => {
          console.log('drawOnCanvas');
          drawOnCanvas({
              style: column,
              x1: 0,
              y1: i * 75,
              x2: 150,
              y2: (i + 1) * 75
          })
        });
      });
}
