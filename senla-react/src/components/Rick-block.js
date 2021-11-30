import React from 'react';

class Rick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
    this.getRickArray = this.getRickArray.bind(this);
    this.getMortyArray = this.getMortyArray.bind(this);
    this.setStateMorty = this.setStateMorty.bind(this);
  }

  setStateMorty() {
    this.setState({
      morty: true
    });
  }

  async getRickArray() {
    const response = await fetch(
      'https://rickandmortyapi.com/api/character/?name=rick&status=alive'
    );
    const pars = await response.json();
    this.setState({
      isLoaded: true,
      items: pars.results
    });
  }

  async getMortyArray() {
    const response = await fetch(
      'https://rickandmortyapi.com/api/character/?name=morty&status=alive'
    );
    const pars = await response.json();
    this.setState({
      isLoaded: true,
      items: pars.results
    });
  }

  componentDidMount() {
    this.getRickArray();
  }

  componentDidUpdate() {
    if (this.state.morty) {
      this.getMortyArray();
    }
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="lifecycle-block">
          <h2>we use the methods of the class component lifecycle</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <button onClick={this.setStateMorty}>Get Morty</button>
        </div>
      );
    }
  }
}

export default Rick;
