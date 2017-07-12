import React, {Component} from 'react';
import * as dc from '../draw-connector';

class ConnectorDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
    }
  }
  
  componentDidMount() {   
    // const width = this.state.screen.width * this.state.screen.ratio;
    // const height = this.state.screen.height * this.state.screen.ratio;
    // const center = {
    //   x: width/2,
    //   y: height/2,
    // }

    const radius = 20;
    const lineWidth = 5;
    //const showSConnector = true;

    const canvas = this.refs.canvas;
    let context = canvas.getContext('2d');
    
    // dark green - start from bottom
    let start = {
      x: 100,
      y: 100,
    }
    let end = {
      x: 0,
      y: 0,
    }
  
    let color = '#559933';
    dc.drawSCurve(start, end, color, lineWidth, radius, radius, context);

    let x = 100;
    // white
    start = {
      x: x + 0,
      y: 0,
    }
    end = {
      x: x + 100, 
      y: 100,
    }
    color = '#FFF'; // 
    dc.drawSCurve(start, end, color, lineWidth, radius, radius, context);

    // neon green
    start = {
      x: 100, // go 50 px right
      y: 200,  // go 200 px down
    }
    end = {
      x: 200,  // go 50 px left
      y: 300,  //go 50 px down
    }
    color = '#0F0'; // 
    dc.drawCurve(start, end, 'vertical',color, lineWidth, radius, null, context);

    // black - start from bottom
    x = 200;
    start = {
      x: x + 200, // go 50 px right
      y: 300,  // go 200 px down
    }
    end = {
      x: x + 100,  // go 50 px left
      y: 200  //go 50 px down
    }
    color = '#000'; // 
    dc.drawCurve(start, end, 'horizontal',color, lineWidth, radius, null, context);

     // grey - start from bottom
    x = 350;
    start = {
      x: x + 200, // go 50 px right
      y: 300,  // go 200 px down
    }
    end = {
      x: x + 100,  // go 50 px left
      y: 200  //go 50 px down
    }
    color = '#AAA'; // 
    dc.drawCurve(start, end, 'vertical',color, lineWidth, radius, null, context);

  }


  render() {   
    return <canvas ref="canvas" id="canvas"
      width={this.state.screen.width * this.state.screen.ratio}
      height={this.state.screen.height * this.state.screen.ratio}
    />;
  }
}

export default ConnectorDemo;