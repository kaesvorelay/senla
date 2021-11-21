import '../style.css';
import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      yellow: false,
      green: false
    };
    this.changeCol = this.changeCol.bind(this);
  }

  changeCol(col) {
    if (col === 'isRed') {
      return this.setState({
        red: true,
        yellow: false,
        green: false
      });
    } else if (col === 'isYellow') {
      return this.setState({
        red: false,
        yellow: true,
        green: false
      });
    } else if (col === 'isGreen') {
      return this.setState({
        red: false,
        yellow: false,
        green: true
      });
    } else if (col === 'clear') {
      return this.setState({
        red: false,
        yellow: false,
        green: false
      });
    }
  }

  render() {
    return (
      <div className="grid-container">
        <Header color={this.state} />
        <Main />
        <Aside />
        <Footer color={this.changeCol} />
        <Link to="hello">Go</Link>
      </div>
    );
  }
}

export default All;
