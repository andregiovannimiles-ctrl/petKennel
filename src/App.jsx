import React from "react";
import ChildComponent from "./ChildComponent.jsx";
import pets from "./data.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pets: pets };
    this.handleNextImage = this.handleNextImage.bind(this);
  }

  handleNextImage(id) {
    this.setState((prevState) => ({
      pets: prevState.pets.map((pet) =>
        pet.id === id
          ? { ...pet, imageIndex: (pet.imageIndex + 1) % pet.images.length }
          : pet
      ),
    }));
  }

  render() {
    return (
      <div style={{ padding: 24 }}>
        <h1>Pet Kennel</h1>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {this.state.pets.map((pet) => (
            <ChildComponent key={pet.id} pet={pet} onNextImage={this.handleNextImage} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;