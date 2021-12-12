import React from "react";

type MyProps = {
  props: string;
};

interface MyState {
  firstName: string;
  lastName: string;
  phoneNumb: string;
  email: string;
}

class SecondSection extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumb: "",
      email: "",
    };
    this.getFirstName = this.getFirstName.bind(this);
    this.getLastName = this.getLastName.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPhoneNum = this.getPhoneNum.bind(this);
    this.setUs = this.setUs.bind(this);
  }

  getFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ firstName: e.target.value });
  }

  getLastName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ lastName: e.target.value });
  }

  getEmail(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ email: e.target.value });
  }

  getPhoneNum(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ phoneNumb: e.target.value });
  }

  setUs(e: React.MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log(this.state);
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
              onChange={this.getFirstName}
              className="input input_text"
              type="text"
              id="firstname"
              placeholder="Ivan"
              name="fname"
            />
            <label className="input-title" htmlFor="lastname">
              Enter lastname
            </label>
            <input
              onChange={this.getLastName}
              className="input input_text"
              type="text"
              id="lastname"
              placeholder="Ivanov"
              name="lname"
            />
            <label className="input-title" htmlFor="email">
              Your email
            </label>
            <input
              onChange={this.getEmail}
              className="input input_text"
              type="email"
              id="email"
              placeholder="ivanov@email.ru"
            />
            <label className="input-title" htmlFor="tel">
              Your telephone
            </label>
            <input
              onChange={this.getPhoneNum}
              className="input input_text"
              type="tel"
              id="tel"
              placeholder="+7 XXX XXX XX XX"
            />
            <input
              onClick={this.setUs}
              id="btn"
              className="button"
              type="submit"
              value="Send"
            />
          </fieldset>
        </form>
      </section>
    );
  }
}

export default SecondSection;
