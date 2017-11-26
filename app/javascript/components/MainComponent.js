import React from 'react';
import axios from 'axios';
import Score1 from './Score1Component'
import Score2 from './Score2Component'
import Banner from './BannerComponent'
import Footer from './FooterComponent'

export default class MainComponent extends React.Component {


  constructor(props) {
    super(props);
    this.state = { allGames: [], currentGame: {} };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/api.json')
    .then(response => {
      this.setState({ allGames: response.data })
      console.log(this.state.allGames, "length", this.state.currentGame.length)
    })
    .catch(error => console.log(error))
  }

  newGameFunction = () => {
    axios.get('http://localhost:5000/api/v1/api/new').catch(error => console.log(error));
    this.setState({currentGame: {gameStarted: true}});
    console.log(this.state.currentGame)
  }

  newGameFunction = () => {
    this.setState({currentGame: {Player1: "Fred"}});
    console.log(this.state.currentGame)
  }


  render() {
    const words = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: "'Amatic SC', cursive",
      backgroundColor: 'black',
      color: 'white',
      textDecoration: 'none',
      transform: 'perspective(1px) translateZ(0)',
      boxShadow: '0 0 1px transparent',
      transitionDuration: '0.3s',
      transitionProperty: 'transform',
      transformOrigin: '0 100%'
    };
    const wordsHover = {
      transform: 'skew(-10deg)'
    }

    if (this.state.currentGame["gameStarted"]) {
      return (
        <div style={words} onMouseEnter={this.wordsHover} onMouseLeave={this.words}>
          <Score1 text=""/>
          <Score2 text=""/>
          <Banner text="Player 1, Enter your name"></Banner>
          <input onClick={() => this.player1Submit() }/>
          <Footer text="Resume:" link1="{this.state.allGames[0]}" link2="{this.state.allGames[1]}" link3="{this.state.allGames[2]}" link4="{this.state.allGames[3]}"/>
        </div>
      )
    } else if (this.state.currentGame) {
      return (
        <div style={words}>
          <Score1 text=""/>
          <Score2 text=""/>
          <Banner text="Welcome to Obvlivia, a 2-player trivia game."></Banner>
          <button className="button" onClick={() => this.newGameFunction() }>New Game</button>
          <Footer text="Resume:" link1="{this.state.allGames[0]}" link2="{this.state.allGames[1]}" link3="{this.state.allGames[2]}" link4="{this.state.allGames[3]}"/>
        </div>
      )
    } else {
      return (
        <h1 style={words}>Else (MainComponent)</h1>
      )
    }
  }
}
