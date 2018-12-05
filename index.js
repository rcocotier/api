import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Home extends React.Component {

  state = { carList: [] };

  componentDidMount() {
    fetch('http://localhost:5656/api/car')
    .then(results => {
      console.log(results);
      return results.json();
    }).then(data => {
      console.log(data);
      this.state.carList = data;
    })
  }

  render() {
    return (
      <div className="carList">
          { this.state.carList }
          qehiioerijo
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

/// RECUPERE LES DONNE DE LA DATA BASE MAIS PROBLEME QUAND MEME POUR AFFICHER 