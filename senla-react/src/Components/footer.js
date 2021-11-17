import React from 'react'
import kitty from '../kitty.png'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.redBg = this.redBg.bind(this);
    this.yellowBg = this.yellowBg.bind(this);
    this.greenBg = this.greenBg.bind(this);
    this.clearBg = this.clearBg.bind(this);
  }

  redBg(){
    this.props.onRed({
      red: false
    })
  }

  yellowBg(){
    this.props.onYellow({
      yellow: false
    })
    console.log(this.props)
  }

  greenBg(){
    this.props.onGreen({
      green: false
    })
    console.log(this.props)
  }

  clearBg() {
    this.props.onClear({
      clear: true
    })
  }

  render() {
    return (
      <footer className="footer">
      <h3 className="footer-title">Footer title</h3>
      <table className="table">
        <tr>
          <td>&nbsp;</td>
          <th>M. Viedo</th>
          <th>Eldorado</th>
          <th>DNS</th>
          <th>Our store</th>
        </tr>
        <tr>
          <th>online order</th>
          <td>+</td>
          <td>-</td>
          <td>+</td>
          <td>+</td>
        </tr>
        <tr>
          <th>Delivery</th>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>+ free</td>
        </tr>
        <tr>
          <th>guarantee</th>
          <td>+</td>
          <td>+</td>
          <td>+</td>
          <td>+ 2 years</td>
        </tr>
        <tr>
          <th>Discounts</th>
          <td>-</td>
          <td>-</td>
          <td>+</td>
          <td>+ 20% all clients</td>
        </tr>
      </table>
      <a id="next-str" href="main.html">Next page</a>
      <figure className="img-wrapper">
        <img className="img" src={kitty} alt="cat" />
        <figcaption className="img-title">
          A little cat asks you to smile
        </figcaption>
      </figure>
      <button onClick={this.redBg} id="background-red">Red</button>
      <button onClick={this.yellowBg} id="background-yellow">yellow</button>
      <button onClick={this.greenBg} id="background-green">green</button>
      <button onClick={this.clearBg} id="clear-background">clear</button>
    </footer>
    )
  }
}

export default Footer;