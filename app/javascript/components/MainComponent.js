import React from 'react';
import axios from 'axios';
import Score1 from './Score1Component'
import Score2 from './Score2Component'
import Banner from './BannerComponent'
import Footer from './FooterComponent'
import NewGameButton from './NewGameButtonComponent'

export default class MainComponent extends React.Component {


  constructor(props) {
    super(props);
    this.state = { allGames: [], currentGame: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/api.json')
    .then(response => {
      this.setState({ allGames: response.data })
      console.log(this.state.allGames)
    })
    .catch(error => console.log(error))
  }


  render() {
    if ({this.state.currentGame} === []) {
      return (
        <div>
        <Score1 text=""/>
        <Score2 text=""/>
        <Banner text="Welcome to Obvlivia, a 2-player trivia game."></Banner>
        <NewGameButton/>
        <Footer text="Resume:" link1="{this.state.allGames[0]}" link2="{this.state.allGames[1]}" link3="{this.state.allGames[2]}" link4="{this.state.allGames[3]}"/>
        </div>
      )
    } else {
      return (
        <h1>Game Started</h1>
      )
    }
  }
}
