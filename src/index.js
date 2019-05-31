// eslint-disable-next-line no-console
console.log('hello world!');

// function init() {
//   alert("start!");
// }


function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  }

  document.getElementById('draw').addEventListener('click', () => {
    draw();
  })
