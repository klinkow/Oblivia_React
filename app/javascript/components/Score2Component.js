import React from 'react';

export default class Score2 extends React.Component {
  render() {
    const divStyle = {
      position: 'fixed',
      right: '1vw',
      top: '0',
      width: '100%',
      textAlign: 'right',
      border: '1px solid green',
      fontSize: '1.5em'
    };
    return (
      <div style={divStyle}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
