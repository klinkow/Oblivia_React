import React from 'react';

export default class Banner extends React.Component {
  render() {
    const size = {
      fontSize: '12vh'
    };
    return (
      <div style={size}>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}
