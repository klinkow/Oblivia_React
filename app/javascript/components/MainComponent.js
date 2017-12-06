import React from 'react';
import axios from 'axios';
import Score1 from './Score1Component'
import Score2 from './Score2Component'
import Banner from './BannerComponent'
import Footer from './FooterComponent'

export default class MainComponent extends React.Component {


  constructor(props) {
    super(props);
    this.state = { allGames: [], currentGame: {}, hover: false };

  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/api.json')
    .then(response => {
      this.setState({ allGames: response.data })
      console.log(this.state.allGames, "length", this.state.currentGame.length)
    })
    .catch(error => console.log(error));

  }

  player1name = () => {
    var assignName = (name) => {
      this.setState({currentGame: {player1: name}});
      }
    document.addEventListener("keydown", function (e) {
      if (e.keyCode === 13) {
        var player1name = document.getElementById('Player1').value ? document.getElementById('Player1').value : "player 1";
        assignName(player1name);
      }
    })
  }

  player2name = () => {
    var assignName = (name) => {
      this.setState({currentGame: {player1: name}});
      }
    document.addEventListener("keydown", function (e) {
      if (e.keyCode === 13) {
        var player2name = document.getElementById('Player2').value ? document.getElementById('Player2').value : "player 2";
        assignName(player2name);
      }
    })
  }

  newGameFunction = () => {
    // axios.get('http://localhost:5000/api/v1/api/new').catch(error => console.log(error));
    this.setState({currentGame: {gameStarted: true}});
    console.log(this.state.currentGame)
  }

  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  }

  render() {
    const words = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      border: "1px solid red",
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

    if (this.state.currentGame["player1"]) {
      return (
        <div style={words}>
          <Score1 text={this.state.player1}/>
          <Banner text="Player 2, Enter your name"></Banner>
          <Footer inputId="Player2" onClick={this.player2name()}/>

        </div>
      )
    } else if (this.state.currentGame["gameStarted"]) {
      return (
        <div style={words}>
          <Banner text="Player 1, Enter your name"></Banner>
          <Footer inputId="Player1" onClick={this.player1name()}/>
        </div>
      )
    } else if (this.state.currentGame) {
      const aStyle = {
        position: 'fixed',
        bottom: '40%',
        left: '45%',
      }
      return (
        <div style={words}>
          <Banner text="Welcome to Obvlivia, a 2-player trivia game"></Banner>
          <a style={aStyle} onClick={() => this.newGameFunction() }>New Game</a>
        </div>
      )
    }
  }
}
