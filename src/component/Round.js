import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Match from './Match';

class Round extends Component{
  generateMatches() {
    const {
      matches,
      handleBroadcastMidpoints,
      handleBroadcastHoverTargetClass,
      hoverTargetClass,
    } = this.props;

    return matches.map((_, idx) =>
      <Match 
        key={idx} 
        match={matches[idx]}
        handleBroadcastMidpoints={handleBroadcastMidpoints}
        handleBroadcastHoverTargetClass={handleBroadcastHoverTargetClass}
        hoverTargetClass={hoverTargetClass}
      />
    );
  }

  render() {
    if (this.props.showCollapse){
      return (
        <section className="round round-collapse" ref="round">
          {this.generateMatches()}
        </section>
      )
    }
    return (
      <section className="round" ref='round' >
        {this.generateMatches()}
      </section>
    );
  }  
}

Round.propTypes = {
  handleBroadcastMidpoints: PropTypes.func,
  showCollapse: PropTypes.bool,
  matches: PropTypes.array,
  handleBroadcastHoverTargetClass: PropTypes.func,
  hoverTargetClass: PropTypes.object,
}

Round.defaultProps = {
  showCollapse: false,
}

export default Round;