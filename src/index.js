// eslint-disable-next-line no-console
console.log('hello world!');

// function init() {
//   alert("start!");
// }

var frames = [
];
var defaultFrame = [
    [["fff"]],
    [["fff"]]
]

const getFrames = () => {
    const frames = [];

    let frame = [
        [["FFFF00"]],
        [["FFFF00"]]
    ]

    frames.push(frame);

    frame = [
        [["FFFF00"]],
        [["0000FF"]]
    ]

    frames.push(frame);

    frame = [
        [["0000FF"]],
        [["0000FF"]]
    ]

    frames.push(frame);

    return frames;
} 

function draw(frame) {
    var canvas = document.getElementById('canvas');

    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      frame.forEach((row, i) => {
        row.forEach((column, j) => {
            ctx.fillStyle = "#" + column;
            ctx.fillRect(0, i*75, 150, (i+1)*75);
        })
      })


  
    //   ctx.fillStyle = "#0000FF";
    //   ctx.fillRect(0, 76, 150, 150);
    //   ctx.clearRect(45, 45, 60, 60);
    //   ctx.strokeRect(50, 50, 50, 50);
    }
  }
  let count = 0;
  document.getElementById('draw').addEventListener('click', () => {
      const frames = getFrames();
      const frame = frames[count % 3 ];
    draw(frame);
    count++
  })
