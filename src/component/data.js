const teams = {
  florida: {
    name: 'Florida',
    seed: 1,   
    key: 'florida',
  },
  uaMsMary:{
    name: 'UA/MS Mary',
    seed: 16,
    key: 'ua-ms-mary',
  },
  colorado: {
    name: 'Colorado',
    seed: 8,
    key: 'colorado',
  },
  pitt: {
    name: 'Pitt',
    seed: 9,
    key: 'pitt'
  },
  ucla: {
    name: 'UCLA',
    seed: 4,
    key:'ucla',
  },
  tulsa: {
    name: 'Tulsa',
    seed: 13,
    key:'tulsa',
  },
  vcu: {
    name: 'VCU',
    seed: 5,
    key:'vcu',
  },
  stephenAustin: {
    name: 'Stephen F. Austin',
    seed: 12,
    key:'stephen-f-austin',
  },
  kansas: {
    name: 'Kansas',
    seed: 2,
    key: 'kansas',
  },
  eastKentucky:{
    name: 'Eastern Kentucky',
    seed: 15,
    key: 'eastern-kentucky',
  },
  newMexico: {
    name: 'New Mexico',
    seed: 7,
    key: 'new-mexico',
  },
  stanford: {
    name: 'Stanford',
    seed: 10,
    key: 'stanford',
  },
  syracuse: {
    name: 'Syracuse',
    seed: 3,
    key: 'syracuse',
  },
  westMich: {
    name: 'West Mich.',
    seed: 14,
    key: 'western-mich',
  },
  dayton: {
    name: 'Dayton',
    seed: 11,
    key: 'dayton',
  },
  ohioSt: {
    name: 'Ohio St.',
    seed: 6,
    key: 'ohio-st',
  }
};

export const region = {
  regionName: 'South Region',
  rounds: [
    {
      matches: [
        {
          team1: {
            team: teams['florida'],
            score: 67,
          },
          team2: {
            team: teams['uaMsMary'],
            score: 55,
          }
        },
        {         
          team2: {
            team: teams['colorado'],
            score: 77
          },
          team1: {
            team: teams['pitt'],
            score: 48,
          },
        },
        {
          team1: {
            team: teams['ucla'],
            score: 76,
          },
          team2: {
            team: teams['tulsa'],
            score: 59
          },
        },
        {
          team2: {
            team: teams['vcu'],
            score: 75,
          },
          team1: {
            team: teams['stephenAustin'],
            score: 77,
          },
        },
        {
          team1: {
            team: teams['kansas'],
            score: 80,
          },             
          team2: {
            team: teams['eastKentucky'],
            score: 69,
          },      
        },
        {
          team2: {
            team: teams['newMexico'],
            score: 53,
          },
          team1: {
            team: teams['stanford'],
            score: 58,
          },          
        },
        {
          team1: {
            team: teams['syracuse'],
            score: 77,
          },
          team2: {
            team: teams['westMich'],
            score: 53,
          }
        },
        {
          team1:{
            team: teams['ohioSt'],
            score: 59
          },
          team2: {
            team: teams['dayton'],
            score: 60,
          },        
        }
      ]
    },
    {
      matches: [
        {
          team1: {
            team: teams['florida'],
            score: 61,
          },
          team2: {
            team: teams['pitt'],
            score: 45,
          }
        },
        {
          team1: {
            team: teams['ucla'],
            score: 77,
          },      
          team2: {
            team: teams['stephenAustin'],
            score: 60,
          },    
        },
        {
          team1: {
            team: teams['kansas'],
            score: 57,
          },
          team2: {
            team: teams['stanford'],
            score: 60,
          },
        },
        {
          team1: {
            team: teams['syracuse'],
            score: 53,
          },
          team2: {
            team: teams['dayton'],
            score: 55,
          },          
        },
      ],
    },
    {
      matches: [
        {
          team1: {
            team: teams['florida'],
            score: 79,
          },
          team2: {
            team: teams['ucla'],
            score: 68,
          }
        },
        {
          team2: {
            team: teams['stanford'],
            score: 72,
          },
          team1: {
            team: teams['dayton'],
            score: 82,
          },          
        },
      ],
    },
    {
      matches: [
        {
          team1: {
            team: teams['florida'],
            score: 62,
          },
          team2: {
            team: teams['dayton'],
            score: 52,
          }
        },
      ]
    }
  ],
}