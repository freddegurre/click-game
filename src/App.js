import React, { Component } from "react";
import ClickCard from "./components/ClickCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ppl from "./ppl.json";
import "./App.css";

class App extends Component {
  state = {
    ppl: ppl, 
    score: 0,
    guess: "",
    highScore: 0,
  };

  clickEvent = id => {
    var choise = this.state.ppl.filter(person => person.id ===id);
    ppl.sort(function(){return 0.5 - Math.random()}); 

    if (choise[0].status === false){
        choise[0].status = true; 
        this.setState({choise})
        this.setState({score: this.state.score +1})
        this.setState({guess: "Well done!"})
        this.setState({highScore: this.state.highScore +1})
    } else {
      this.setState({score: 0})
      this.setState({guess: "Wrong!"})
      this.reset(); 
      
    }  

  }
  reset = () => {
      var guys = this.state.ppl
      for (var i = 0; i < guys.length; i++){
        guys[i].status = false;
      }
      this.setState({ppl: guys})
   }
   //if (this.state.highScore <= this.state.score ){
    //this.setState({highScore: this.state.highScore +1})
        //}
  render() {
    return (
      <div>
      <Header score={this.state.score} guess={this.state.guess} highScore={this.state.highScore} />
      <Wrapper>
        
        {this.state.ppl.map(person =>(
           <ClickCard
            id={person.id}
            key={person.id}
            name={person.name}
            image={person.image}
            status={person.status}
            clickEvent={this.clickEvent}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
