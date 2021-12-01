import React from 'react'

class Aside extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      bgRed: 'test-js'
    }
    this.testBtn = this.testBtn.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this)
  }

  testBtn() {
    try {
        let ask = prompt("Enter a number");
         if (isNaN(ask) || ask === "") {
          alert('This is not number. Enter number please.');
        } else {
          let res = `the mathematical operations will be presented below:
          ${++ask}, ${ask*2}, ${ask/2}, ${ask**2} - simple mathematical operations`
          console.log(res);
        }
        
      }

    catch(e) {
      alert(e.name);
      alert(e.message);
      alert("Try click btn");
    }
  }

  mouseOver(e) {
    this.setState({bgRed: 'test-js-red'})
  }
  
  mouseOut(e) {
    this.setState({bgRed: 'test-js'})
  }

  render() {
    return (
      <aside className="aside-index">
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Earum nisi sequi, neque 
        omnis eum iste laudantium eius. Eveniet doloremque, 
        temporibus minus odio delectus natus quisquam cupiditate 
        hic tempora aspernatur alias?

        <p onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className={this.state.bgRed}>
          You wanna play a game?
        </p>
        <button onClick={this.testBtn} className="test-js-button">Click me</button>
      </aside>
    )
  }
}

export default Aside;