import React from 'react';

export default class Score2 extends React.Component {
  render() {
    const size = {
      fontSize: '3vh'
    };
    return (
      <div style={size}>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}
