import React from 'react'
import {NavLink} from 'react-router-dom'
import {useLocation} from 'react-router-dom'


class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
    this.bgHeader = this.bgHeader.bind(this)
  }
  bgHeader() {
    if (this.props.color.red) {
      localStorage.clear();
      localStorage.setItem('background', 'red');
      sessionStorage.setItem('background', 'red');
      return 'header-red'
    } else if (this.props.color.green) {
      localStorage.clear();
      localStorage.setItem('background', 'green');
      sessionStorage.setItem('background', 'geen');
      return 'header-green'
    } else if (this.props.color.yellow) {
      localStorage.clear();
      localStorage.setItem('background', 'yellow');
      sessionStorage.setItem('background', 'yellow');
      return 'header-yellow'
    } else {
      return 'header'
    }
  }
  
  //   if (e.target.innerHTML === 'Red') {
  //     if(localStorage.getItem('bacground')!== "red") {
  //       localStorage.clear();
  //       localStorage.setItem('background', 'red');
  //       sessionStorage.setItem('background', 'red');
  //       document.querySelector('.header').setAttribute('style','background: red')
  //     }
  //   } else if (e.target.innerHTML === 'yellow') {
  //     if(localStorage.getItem('bacground')!== "yellow") {
  //       localStorage.clear();
  //       localStorage.setItem('background', 'yellow');
  //       sessionStorage.setItem('background', 'yellow');
  //       document.querySelector('.header').setAttribute('style','background: yellow')
  //     }
  //   } else if (e.target.innerHTML === 'green') {
  //     if(localStorage.getItem('bacground')!== "green") {
  //       localStorage.clear();
  //       localStorage.setItem('background', 'green');
  //       sessionStorage.setItem('background', 'geen');
  //       document.querySelector('.header').setAttribute('style','background: green')
  //     }
  //   } else if (e.target.innerHTML === 'clear') {
  //     if(localStorage.getItem('background')) {
  //       localStorage.clear();
  //       sessionStorage.clear();
  //       document.querySelector('.header').setAttribute('style','background: #fff')
  //     }
  //   }
  // }

  render() {
    return (
      <header className={this.bgHeader()}>
        <h1 className="header-title">html document</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list_link"><NavLink to="/hello">html structure</NavLink></li>
            <li className="nav-list_link"><NavLink to="#">inputs</NavLink></li>
            <li className="nav-list_link"><NavLink to="#">table</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
}


export default Header;