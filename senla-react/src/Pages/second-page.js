import React from 'react'
import {Link} from 'react-router-dom'

class Welcom extends React.Component  {
  render() {
    const color = this.props.color
    return (
      <p style={{background: color}}>Welcom on second page</p>
    )
  }
}

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
    this.colorBlue = this.colorBlue.bind(this)
  }
  colorBlue() {
    this.setState({
      color: 'blue'
    })
  }
  render() {
    return (
      <div style={{backgroundColor: this.state.color}}>
        <h1 onClick={this.colorBlue}>Hello, world</h1>
        <Link to='/'>Back</Link>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class SecondPage extends React.Component {
  render() {
    return (
      <Hello render={color=>(<Welcom color={color}/>)}/>
    )
  }
}

export default SecondPage;