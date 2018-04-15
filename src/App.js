import React, { Component } from "react";
import ClickCard from "./components/ClickCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ppl from "./ppl.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    ppl: ppl, 
    status: false
    
    
  };

  clickEvent = () => {
    alert("click")
   
  this.setState({status: true})
  }
  /*removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };*/

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Header />
      <Wrapper>
        
        {this.state.ppl.map(person =>(
           <ClickCard
            id={person.id}
            key={person.id}
            name={person.name}
            image={person.image}
            status={this.state.status}
            clickEvent={this.clickEvent}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
