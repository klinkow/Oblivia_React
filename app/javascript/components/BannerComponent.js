import React from 'react';

export default class Banner extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}
