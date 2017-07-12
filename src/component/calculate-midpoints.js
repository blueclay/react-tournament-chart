// Calculate center points
// +-----+
// |     x
// +-----+
const calcRight = (left, width, top, height, padding) => ({
  x: left + width + padding,
  y: top + height / 2,
});

// +-----+
// x     |
// +-----+
const calcLeft = (left, top, height, padding) => ({
  x: left + padding,
  y: top + height /2 ,
});

// +-----+
// |  x  |
// +-----+
const calcCenter = (left, width, top, height) =>({
  x: left + width  / 2,
  y: top  + height / 2
});


export const calculateMidpoints = (rect, padding) => ({  
  left: calcLeft(
    rect.left, 
    rect.top, 
    rect.height,
    padding),
  right: calcRight(
    rect.left, 
    rect.width,
    rect.top, 
    rect.height, 
    padding),
  center: calcCenter(
    rect.left, 
    rect.width,
    rect.top, 
    rect.height),
});
