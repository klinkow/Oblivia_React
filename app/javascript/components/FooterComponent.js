import React from 'react';

export default class Footer extends React.Component {
  render() {
    const divStyle = {
      border: '1px solid green',
      fontSize: '3em',
      position: 'fixed',
      bottom: '7vh',
      width: '100%',
      textAlign: 'center'
    };
    const pStyle = {

    }
    return (
      <div style={divStyle}>
        <p style={pStyle}>{this.props.text}</p>
      </div>
    );
  }
}
