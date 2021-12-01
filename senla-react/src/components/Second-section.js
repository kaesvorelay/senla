import React from 'react'

class SecondSection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumb: '',
      email: ''
    };
    this.getFirstName = this.getFirstName.bind(this);
    this.getLastName = this.getLastName.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPhoneNum = this.getPhoneNum.bind(this)
    this.setUs = this.setUs.bind(this)
  }

  getFirstName(e) {
    this.setState({firstName: e.target.value})
  }

  getLastName(e) {
    this.setState({lastName: e.target.value})
  }

  getEmail(e) {
    this.setState({email: e.target.value})
  }

  getPhoneNum(e) {
    this.setState({phoneNumb: e.target.value})
  }

  setUs(e) {
    e.preventDefault()
    console.log(this.state)
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
              value={this.state.firstName}
              onChange={this.getFirstName}
              className="input input_text"
              type="text"
              id="firstname"
              placeholder="Ivan"
              name="fname"
            />
            <label className="input-title" htmlFor="lastname">Enter lastname</label>
            <input
              value={this.state.lastName}
              onChange={this.getLastName}
              className="input input_text"
              type="text"
              id="lastname"
              placeholder="Ivanov"
              name="lname"
            />
            <label className="input-title" htmlFor="email">Your email</label>
            <input
              value={this.state.email}
              onChange={this.getEmail}
              className="input input_text"
              type="email"
              id="email"
              placeholder="ivanov@email.ru"
            />
            <label className="input-title" htmlFor="tel">Your telephone</label>
            <input
              value={this.state.phoneNumb}
              onChange={this.getPhoneNum}
              className="input input_text"
              type="tel"
              id="tel"
              placeholder="+7 XXX XXX XX XX"
            />
            <input onClick={this.setUs} id="btn" className="button" type="submit" value="Send" />
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


export default SecondSection;