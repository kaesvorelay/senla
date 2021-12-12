import React from "react";
import { Link, Outlet } from "react-router-dom";

type MyProps = {
  color?: string;
  render?: any;
};

type MyState = {
  color?: string;
};

class Welcome extends React.Component<MyProps> {
  render() {
    const color = this.props.color;
    return <p style={{ background: color }}>Welcom on second page</p>;
  }
}

class Hello extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      color: "",
    };
    this.colorBlue = this.colorBlue.bind(this);
  }
  colorBlue() {
    this.setState({
      color: "blue",
    });
  }
  render() {
    return (
      <div style={{ backgroundColor: this.state.color }}>
        <h1>Hello, world</h1>
        <Link to="/">Back</Link>
        {this.props.render(this.state)}
      </div>
    );
  }
}

class SecondPage extends React.Component<MyState, MyProps> {
  render() {
    return <Hello render={(color: string) => <Welcome color={color} />} />;
    <Outlet />;
  }
}

export default SecondPage;
