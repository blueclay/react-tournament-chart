const lineDistanceFromEnd = (start, end, radius) => {
  var x = end.x, y=end.y;

  if (end.x - start.x < 0) x += radius; //left
  if (end.x - start.x > 0) x -= radius; //right
  if (end.y - start.y < 0) y += radius; //up
  if (end.y - start.y > 0) y -= radius; //down

  return { x: x, y: y };
}

const drawLine = (start, end, ctx) =>{
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
}

export const drawCurve = (start, end, orientation, color, linewidth, radius, radius2, context) => {
  if (!radius2) radius2 = radius;

  let anchor;
  if (orientation === 'horizontal'){
    anchor =  { x: end.x, y: start.y};
  } else {
    anchor = { x: start.x, y: end.y };
  }

  var m1 = lineDistanceFromEnd(start, anchor, radius);
  var m2 = lineDistanceFromEnd(end, anchor, radius2);

  context.save();

  context.lineWidth = linewidth;
  context.lineCap = 'square';
  

  context.beginPath();
  context.strokeStyle = color; //'#00FF00';
  context.bezierCurveTo(m1.x, m1.y, anchor.x, anchor.y, m2.x, m2.y);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = '#FF0000';
  drawLine(start, m1, context);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.strokeStyle = '#0000FF';
  drawLine(m2, end, context);
  context.stroke();
  context.closePath();

  context.restore();
}

export const drawSCurve = (start, end, color, linewidth, radius, radius2, ctx) => {
  var midpoint = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 };
  if (!radius2) radius2 = radius;
  
  drawCurve(start, midpoint, 'horizontal', color, linewidth, radius, radius2, ctx);
  drawCurve(midpoint, end, 'vertical', color, linewidth, radius2, radius,ctx);
}

export const drawSConnector = (start, end, radius, color, linewidth, context) => {
  if (context){
    const radiusAdjust = Math.min(radius, Math.abs(start.y - end.y)/2);
    drawSCurve(start, end,
      color, linewidth, radius, radiusAdjust, context);
  }
}

export const drawConnector = (start, end, radius, color, linewidth, showSConnector, context) => {
  if (start && end){
    if (showSConnector){
      drawSConnector(start, end, radius, color, linewidth, context);    
      return;
    }

    // single curve for collapsed columns
    drawCurve(start, end, 'horizontal', color, linewidth, radius, null, context);
  }
}
