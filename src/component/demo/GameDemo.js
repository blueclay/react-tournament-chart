import React, {Component} from 'react';
import Game from '../Game';

class GameDemo extends Component {
  render() {       
    const games1 = [
      {
        team1: {
          team: {
            name: 'Florida',
            seed: 1,   
            key: 'florida',
          },
          score: 67,
        },
        team2: {
          team: {
            name: 'UA/MS Mary',
            seed: 16,
            key: 'ua-ms-mary',
          },
          score: 55,
        }
      },
      {
        team2: {
            team: {
              name: 'Colorado',
              seed: 8,
              key: 'colorado',
            },
            score: 77
        },
        team1: {
          team: {
            name: 'Pittmoss',
            seed: 16,
            key: 'pittmoss',
          },
          score: 55,
        }
      },
    ];

    return (
      <div>      
        <div className="region">
          <div className="round">
            <Game 
              key={1}
              game={games1[0]}
            />
          </div>
          <div className="round">
            <Game 
              key={1}
              game={games1[1]}
            />
          </div>
        </div>
      </div>
    );   
  }
}

export default GameDemo;