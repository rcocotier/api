import React from "react";

class CarsList extends React.Component {
  render() {
    return (
      <div className="cars-list">
        <h1>Cars List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />