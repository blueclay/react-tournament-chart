export const mapRound = (round, index, arr) => {
  let mappedRound = {
    showCollapse: false,
    showSConnector: false,
    matches: round.matches,
  };
  
  // The last 2 round elements have "round-Collapse" style display (can be squeeze between previous rounds)
  if (index > arr.length - 3) {
    mappedRound.showCollapse = true; 
  }

  // The game elements that are not in the last 2 rounds have S curve connectors
  if (index <= arr.length - 3) {
    mappedRound.showSConnector = true;
  }
  
  return mappedRound;
};