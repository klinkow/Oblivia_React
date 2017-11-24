import React from 'react';
import axios from 'axios';

export default class SampleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: []
    }
  },


  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/ideas.json').then(response => {
      console.log(response)
      this.setState({ideas: response.data})
    }).catch(error => console.log(error))
  },


  render() {
    return (
      <h1>Hi, I'm a Sample Component!</h1>
    );
  }
}
