import React from "react";

class ChildComponent extends React.Component {
  render() {
    const { pet, onNextImage } = this.props;
    const current = pet.images[pet.imageIndex];

    return (
      <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, width: 220, textAlign: "center" }}>
        <h2>{pet.name}</h2>
        <img src={current.url} alt={pet.name + " is " + current.status} width={200} height={200} />
        <p>Status: {current.status}</p>
        <button onClick={() => onNextImage(pet.id)}>Next mood</button>
      </div>
    );
  }
}

export default ChildComponent;