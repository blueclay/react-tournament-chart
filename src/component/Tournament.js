import React, {Component} from 'react';
import Round from './Round';
import { mapConnectors } from './map-connectors';
import * as dc from './draw-connector';
import { region } from './data';
import { mapRound } from './map-rounds';

class Tournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
      context: null,
      updateCanvas: false,
      hoverTargetClass: null,
    }
    this.teamMidpoints = [];
  }
  
  broadcastMidpoints = (rndNum) => (midpoint) => {
    let matchesInRound = this.teamMidpoints[rndNum];
    if (!matchesInRound) {
      matchesInRound = {
        matches: [],
      };
    }
    
    matchesInRound.matches.push(midpoint); // object with team1 and team2

    if (!this.teamMidpoints.length) {
      this.teamMidpoints.push(matchesInRound);
    } else {
      this.teamMidpoints[rndNum] = matchesInRound;
    }
  }

  broadcastHoverTargetClass = (targetClass) => {
    this.setState({
      hoverTargetClass: targetClass,
    })
  }

  drawConnectors(teamMidpoints) {
    const radius = 10;
    const color = '#593';
    const linewidth = 3;
    
    if (!this.state.updateCanvas) {
      return;
    }

    teamMidpoints
      .map(mapRound)
      .map(mapConnectors)
      .forEach((round, index, arr) => {
        round.matches.forEach((match) => {
          // team1
          if (match.team1.start) {
            dc.drawConnector(match.team1.start, match.team1.end, radius, color, linewidth, round.showSConnector, this.state.context);
          }        
          if (match.team2.start) {
            dc.drawConnector(match.team2.start, match.team2.end, radius, color, linewidth, round.showSConnector, this.state.context);
          }
        }, this);
      }, this);   
  }

  updateDimensions = () => {
    const canvas = this.refs.canvas;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const r = window.devicePixelRatio;

    canvas.width  = w * 2; // retina
    canvas.height = h * 2; // retina
    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';

    let context = this.state.context;
    if (!context) {
      context = canvas.getContext('2d');
    }
    
    context.scale(2, 2); // retina
    context.clearRect( 0, 0, w, h);

    this.setState({
      context,
      width: canvas.width,
      height: canvas.height,
      ratio: r || 1,
      updateCanvas: true,
    });
  }

  componentDidUpdate() {    
    this.drawConnectors(this.teamMidpoints);   

    if (this.state.updateCanvas) {
      this.setState({
        updateCanvas: false,
      });
    }

    this.teamMidpoints = [];
  }

  componentDidMount() {   
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const rounds = region.rounds;

    return (
    <div id='regionContainer'>
      <canvas ref="canvas" id="canvas"
        width={this.state.screen.width * this.state.screen.ratio}
        height={this.state.screen.height * this.state.screen.ratio}
      />
      <div className="region" ref='region' >
        {
          rounds.map(mapRound).map((round, index, arr) => (
            <Round
              handleBroadcastMidpoints={this.broadcastMidpoints(index)}
              matches={round.matches}
              key={'round-'+index}
              showCollapse={round.showCollapse}
              handleBroadcastHoverTargetClass={this.broadcastHoverTargetClass}
              hoverTargetClass={this.state.hoverTargetClass}
            />
            )
          )
        }
      </div>
    </div>
    );
  }
}

export default Tournament;