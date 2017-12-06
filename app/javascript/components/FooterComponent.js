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

    if (this.props.inputId) {
      return (
        <div style={divStyle}>
          <input id={this.props.inputId} type="text"/>
        </div>
      );
    } else {
      return (
        <div style={divStyle}>
          <p>{this.props.text}</p>
        </div>
      );
    }
  }
}
