import React from 'react';
import axios from 'axios';

export default class SampleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: []
    }
  },


  componentDidMount() {
    axios.get('http://localhost:5000').then(response => {
      console.log(response)
      this.setState({game: response.data})
    }).catch(error => console.log(error))
  },


  render() {
    return (
      <h1>Hi, I'm a Sample Component!</h1>
    );
  }
}
