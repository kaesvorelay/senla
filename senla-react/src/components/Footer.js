import React from "react";
import kitty from "../kitty.png";

class Footer extends React.Component {
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
        <figure className="img-wrapper">
          <img className="img" src={kitty} alt="cat" />
          <figcaption className="img-title">
            A little cat asks you to smile
          </figcaption>
        </figure>
      </footer>
    );
  }
}

export default Footer;
