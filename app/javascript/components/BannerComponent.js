import React from 'react';

export default class Banner extends React.Component {
  render() {
    const divStyle = {
      border: '1px solid green',
      fontSize: '4em',
      position: 'fixed',
      bottom: '60%',
      width: '100%',
      textAlign: 'center',
    };
    const pStyle = {
    };
    return (
      <div style={divStyle}>
        <p style={pStyle}>{this.props.text}</p>
      </div>
    );
  }
}
