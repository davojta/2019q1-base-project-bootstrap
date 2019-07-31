const domFrameMatcher = [
    [[".el1"]],
    [[".el2"]]
  ]
export const getFrames = (domFrames) => {
      const frames = [];
  
  
      domFrames.forEach((domFrame) => {
          let frame = domFrameMatcher.map((row) => {
              return row.map((column) => {
                      return column.map((pixelSelector)=> {
                          const domPixel = domFrame.querySelector(pixelSelector);
  
                          return getComputedStyle(domPixel).backgroundColor;
                      })
              })
          });
  
          frames.push(frame);
      })
  
      // console.log('frames', frames);
  
      return frames;
  } 