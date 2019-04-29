import React, {Component} from "react";
import Navbar from "./components/navbar";
import Wrapper from "./components/wrapper";
import Card from "./components/card";
import character from "./character.json";
import "./App.css";


class App extends Component {
  state = {
    character,
    id: [], 
    score: 0,
    topScore: 0
  }

  clickedCard = (id) =>{
    if (this.state.id.includes(id)) {
      this.setState({id: [], score: 0})
      alert (`Nice work you got ${this.state.score}/12!`)
    } else {
      let newArray = this.state.id
      newArray.push(id)
      this.setState({id: newArray, score: (this.state.score +1)}, ()=>{
        if (this.state.topScore < this.state.score) {
          this.setState({topScore: this.state.topScore +1})
        } 
      })
    }
    for (let i = character.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [character[i], character[j]] = [character[j], character[i]];
    }
    console.log(this.state.id)
  }

  render () {
  return (
    <div>
      <Navbar 
      score={this.state.score}
      topScore={this.state.topScore}
      />
      <Wrapper>
      {this.state.character.map(character => {
        return <Card 
        id={character.id}
        key={character.id}
        image={character.image}
        clickedCard={this.clickedCard}
        />
      })}
      </Wrapper>
    </div>
  )
}
}

export default App;
