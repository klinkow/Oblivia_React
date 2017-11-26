import React from 'react';

export default class Footer extends React.Component {
  render() {
    const size = {
      fontSize: '4.5vh'
    };
    return (
      <div style={size}>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}
