import './style.css';
import React from 'react'
class Header extends React.Component {
  render() {
    return(
      <header className="header">
      <h1 className="header-title">html document</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list_link"><a href="#">html structure</a></li>
          <li className="nav-list_link"><a href="#">inputs</a></li>
          <li className="nav-list_link"><a href="#">table</a></li>
        </ul>
      </nav>
    </header>
    )
  }
}

class FirstSection extends React.Component {
  constructor(props) {
    super(props);
    this.getGitHubUser = this.getGitHubUser.bind(this);
  }

  async getGitHubUser(e) {
    e.preventDefault();
    const wrap = document.querySelector('.wrap');
    try{
      const getRepVal = document.querySelector('#input-rep').value;
      const url = `https://api.github.com/users/${getRepVal}/repos`;
  
      const response = await fetch(url);
      const us = await response.json();
      
      const allRepos = document.createElement('p');
        allRepos.textContent = `number of rep ${us.length}`;
        wrap.append(allRepos);
  
        const repName = document.createElement('p');
        repName.textContent = `Rep name: ${us[0].name}`
        wrap.append(repName);
  
        const authorName = document.createElement('p');
        authorName.textContent = `Fullname: ${us[0].full_name}`;
        wrap.append(authorName)
    } catch(err) {
      alert(`Input error: ${err.message}`)
    }
  }

  render() { 
    return (
      <section className="first-section">
        <h2 className="section-title">first section</h2>
        <p className="first-section_text">
          <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ea
          a, <i>voluptatum illo</i> vero nihil enim, harum incidunt deserunt
          voluptates cupiditate provident sint! Officiis amet nesciunt
          consectetur odio, debitis deleniti sapiente?
          <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ea
          a, <i>voluptatum illo</i> vero nihil enim, harum incidunt deserunt
          voluptates cupiditate provident sint! Officiis amet nesciunt
          consectetur odio, debitis deleniti sapiente?
          <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ea
          a, <i>voluptatum illo</i> vero nihil enim, harum incidunt deserunt
          voluptates cupiditate provident sint! Officiis amet nesciunt
          consectetur odio, debitis deleniti sapiente?
          <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ea
          a, <i>voluptatum illo</i> vero nihil enim, harum incidunt deserunt
          voluptates cupiditate provident sint! Officiis amet nesciunt
          consectetur odio, debitis deleniti sapiente?
        </p>
        <div className="wrap">
            <input type="text" name="text" id="input-rep"/>
            <button id="search1">Async</button>
            <button id="search2">promis</button>
        </div>
      </section>
    )
  }
}

class SecondSection extends React.Component {
  constructor(props){
    super(props);
    this.getUser = this.getUser.bind(this);
    this.userList = new UserList();
  }

  getUser(e){
    e.preventDefault();
    
    let firstName = document.querySelector('#firstname').value;
    let lastName = document.querySelector('#lastname').value;
    let email = document.querySelector('#email').value;
    let tel = document.querySelector('#tel').value;

    let arrayUser = [firstName, lastName, email, tel]

    let user = new AnotherUser(...arrayUser);

    window.user = user;

    this.userList.addUser(user);
    user.hello();
    this.getAllUsers();
  }

  getAllUsers() {
    for (let i=0; i < this.userList.users.length; i++) {
      console.log(this.userList.getAllinfo.call(this.userList.users[i]));
    }
  } 

  render() {
    return (
      <section className="second-section">
        <h3 className="section-title">second section</h3>
        <form className="form" action="#" method="GET">
          <fieldset className="form-wrapper form-wrapper_left">
            <legend className="form-title">Registration</legend>
            <label className="input-title" htmlFor="firstname">
              Enter name
            </label>
            <input
              className="input input_text"
              type="text"
              id="firstname"
              placeholder="Ivan"
              name="fname"
            />
            <label className="input-title" htmlFor="lastname">Enter lastname</label>
            <input
              className="input input_text"
              type="text"
              id="lastname"
              placeholder="Ivanov"
              name="lname"
            />
            <label className="input-title" htmlFor="email">Your email</label>
            <input
              className="input input_text"
              type="email"
              id="email"
              placeholder="ivanov@email.ru"
            />
            <label className="input-title" htmlFor="tel">Your telephone</label>
            <input
              className="input input_text"
              type="tel"
              id="tel"
              placeholder="+7 XXX XXX XX XX"
            />
            <input onClick={this.getUser} id="btn" className="button" type="submit" value="Send" />
          </fieldset>
          <fieldset className="form-wrapper form-wrapper_center">
            <legend>Other information</legend>
            <label className="input-title" htmlFor="color">Choose a color</label>
            <input className="input" type="color" id="color" />
            <label className="input-title" htmlFor="num">How many people are on your team</label>
            <input className="input" type="number" id="num" />
            <label className="input-title" htmlFor="range">Move the slider, it's cool</label>
            <input className="input" type="range" id="range" min="0" max="123" step="1" />
            <label className="input-title">Gender</label>
            <label className="input-title" htmlFor="man">man</label>
            <input className="input" type="radio" id="man" name="gen" checked />
            <label className="input-title" htmlFor="woman">woman</label>
            <input className="input" type="radio" id="woman" name="gen" />
            <label className="input-title" htmlFor="num">Select number</label>
            <select className="input" id="num" name="num">
              <option >Select numbers</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <label className="input-title" htmlFor="age">age</label>
            <input className="input" type="date" id="age" name="age" />
          </fieldset>
          <fieldset className="form-wrapper form-wrapper_right">
          <legend>More other information</legend>
          <label className="input-title"
            >Choose your favorite movie universes</label>
          <label className="input-title" htmlFor="Marvel"
            ><input
              className="input"
              id="Marvel"
              type="checkbox"
              value="Marvel"
              name="Marvel"
              checked
            />Marvel</label>
          <label className="input-title" htmlFor="DC"
            ><input
              className="input"
              id="DC"
              type="checkbox"
              value="DC"
              name="DC"/>DC</label>
          <label className="input-title" htmlFor="Star wars"><input
              className="input"
              id="Star wars"
              type="checkbox"
              value="Star wars"
              name="Star wars"
            />Star wars</label>
          <label className="input-title" htmlFor="Don't like"
            ><input
              className="input"
              id="Don't like"
              type="checkbox"
              value="Don't like"
              name="Don't like"
            />Don't like</label>
          <label className="input-title" htmlFor="descr"
            >Tell us about yourself</label>
          <textarea
            className="textarea"
            name="descr"
            id="descr"
            placeholder="Write here"
          ></textarea>
          <input id="reset" className="button input" type="reset" value="reset" />
          <input className="button input" type="submit" value="Send" />
        </fieldset>
      </form>
    </section>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <FirstSection/>
        <SecondSection/>
      </main>
    )
  }
}

class Aside extends React.Component {
   constructor(props) {
    super(props);
    this.testBtn = this.testBtn.bind(this);
    this.toggleBgOver = this.toggleBgOver.bind(this);
    this.toggleBgOut  = this.toggleBgOut.bind(this)
  }

  testBtn(e) {
    try {
        let ask = prompt("Enter a number");
         if (isNaN(ask) || ask == "") {
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

  toggleBgOver(e) {
    e.preventDefault();
    let p = document.querySelector('.test-js');
    p.setAttribute('style','background-color: green');
  }

  toggleBgOut(e) {
    e.preventDefault();
    let p = document.querySelector('.test-js');
    p.setAttribute('style','background-color: red');
  }

  render() {
    return (
      <aside className="aside-index">
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Earum nisi sequi, neque 
        omnis eum iste laudantium eius. Eveniet doloremque, 
        temporibus minus odio delectus natus quisquam cupiditate 
        hic tempora aspernatur alias?

        <p onMouseOver={this.toggleBgOver} onMouseOut={this.toggleBgOut} className="test-js">
          You wanna play a game?
        </p>
        <button onClick={this.testBtn} className="test-js-button">Click me</button>
      </aside>
    )
  }
}


class All extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <Header/>
        <Main/>
        <Aside/>
        <Footer/>
      </div>
    )
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.toggleBg = this.toggleBg.bind(this);
  }

  toggleBg(e) {
    e.preventDefault();
    if (e.target.innerHTML === 'Red') {
      if(localStorage.getItem('bacground')!== "red") {
        localStorage.clear();
        localStorage.setItem('background', 'red');
        sessionStorage.setItem('background', 'red');
        document.querySelector('.header').setAttribute('style','background: red')
      }
    } else if (e.target.innerHTML === 'yellow') {
      if(localStorage.getItem('bacground')!== "yellow") {
        localStorage.clear();
        localStorage.setItem('background', 'yellow');
        sessionStorage.setItem('background', 'yellow');
        document.querySelector('.header').setAttribute('style','background: yellow')
      }
    } else if (e.target.innerHTML === 'green') {
      if(localStorage.getItem('bacground')!== "green") {
        localStorage.clear();
        localStorage.setItem('background', 'green');
        sessionStorage.setItem('background', 'geen');
        document.querySelector('.header').setAttribute('style','background: green')
      }
    } else if (e.target.innerHTML === 'clear') {
      if(localStorage.getItem('background')) {
        localStorage.clear();
        sessionStorage.clear();
        document.querySelector('.header').setAttribute('style','background: #fff')
      }
    }
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
        <img className="img" src="cat.png" alt="cat" />
        <figcaption className="img-title">
          A little cat asks you to smile
        </figcaption>
      </figure>
      <button onClick={this.toggleBg} id="background-red">Red</button>
      <button onClick={this.toggleBg} id="background-yellow">yellow</button>
      <button onClick={this.toggleBg} id="background-green">green</button>
      <button onClick={this.toggleBg} id="clear-background">clear</button>
    </footer>
    )
  }
}

class User {
  constructor(...arg){
      this.firstName = arg[0];
      this.lastName = arg[1];
      this.email = arg[2];
      this.tel = arg[3];
  }

  [Symbol.iterator] = function *() {
    for (let i in this) {
      yield this[i];
    }
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`
  }
}

class UserList {
  constructor(){
    this.users = [];
    this.addUser = function (user) {
      this.users.push(user);
    }
    this.getAllinfo = function() {return `${this.firstName}, ${this.lastName}, ${this.email}, ${this.tel}`};
  }
}

class AnotherUser extends User {
  constructor(...arg){
    super(...arg)
  }
  hello(){
    console.log(`Greetings ${super.sayHello()}`)
  }
}

function App() {
  return (
    <All />
    )
}

export default App;
