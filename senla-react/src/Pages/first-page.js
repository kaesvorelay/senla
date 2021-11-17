import '../style.css';
import React from 'react'
import Header from '../Components/header'
import Main from '../Components/main'
import Aside from '../Components/aside'
import Footer from '../Components/footer'
import {Link} from 'react-router-dom'

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      yellow: false,
      green: false
    }
    this.switchRed = this.switchRed.bind(this);
    this.switchYellow = this.switchYellow.bind(this);
    this.switchGreen = this.switchGreen.bind(this);
    this.clear = this.clear.bind(this)
  }
  switchRed(){
    this.setState({
      red: true,
      yellow: false,
      green: false
    })
    console.log(this.state)
  }
  switchYellow(){
    this.setState({
      red: false,
      yellow: true,
      green: false
    })
    console.log(this.state)
  }
  switchGreen(){
    this.setState({
      red: false,
      yellow: false,
      green: true,
    })
    console.log(this.state)
  }

  clear() {
    this.setState({
      red: false,
      yellow: false,
      green: false
    })
    localStorage.clear();
    sessionStorage.clear();
  }
  
  
  render() {
    return (
      <div className="grid-container">
        <Header color={this.state}/>
        <Main/>
        <Aside/>
        <Footer onClear={this.clear} onRed={this.switchRed} onYellow={this.switchYellow} onGreen={this.switchGreen}/>
        <Link to='hello'>Go</Link>
      </div>
    )
  }
}

export default All;