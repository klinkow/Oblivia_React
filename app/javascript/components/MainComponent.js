import React from 'react';
import axios from 'axios';
import NewGame from './new_game';
import EnterName from './enter_name';
import Question from './question';

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allGames: [], gameState: "newGame" };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/api.json')
    .then(response => {
      this.setState((prevState) => {
        var currentGame = Object.assign(response.data[0], {state: prevState.gameState}, [response.data]);
        return currentGame
      })
      console.log("Main Component Mounted")
    })
    .catch(error => console.log(error));
  }

  setPlayerName = (player, name) => {
    if (player === 1) {
      this.setState({player1: name, gameState: "player2Name"})
    } else if (player === 2) {
      this.setState({player2: name, gameState: "question1"})
    }
    console.log("player " + player + " set to: " + name);
  }

  setGameState = (value) => {
    this.setState({gameState: value});
    console.log("game state changed to " + value);
  }

  render() {
    console.log("main component rendered")
    switch (this.state.gameState) {
      case "newGame":
        return (
          <NewGame startGame={() => this.setGameState("player1Name")}/>
        );
        break;
      case "player1Name":
        return (
          <EnterName
            inputID="1"
            newGameState={ (value) => {
              this.setPlayerName(1, value)
              }
            }/>
          );
        break;
      case "player2Name":
        return (
          <EnterName
            inputID="2"
            newGameState={ (value) => {
              this.setPlayerName(2, value)
              }
            }/>
          );
        break;
      case "question1":
        return (
          <Question
            text={this.state.question1}
            a={this.state.question1answer1}
            b={this.state.question1answer2}
            c={this.state.question1answer3}
            d={this.state.question1answer4}/>
          );
    }
  }
}
