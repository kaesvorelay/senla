import { link } from "fs";
import React, { useCallback, useState } from "react";
import { Provider } from "react-redux";

import useInput from "../hooks/useHook";
import useTheme from "../hooks/useTheme";
import StarWarsBlock from "./StarWars-block";
import UserList from "./userList";
import Counter from "./Counter";

interface MyUserState {
  name: string;
  status: string;
}

function SearchComponent() {
  let val = useInput();
  let namePers = val.value;
  const [userReposArr, setUserReposArr] = useState<MyUserState[]>([]);

  function getRickAndMorty() {
    fetch(`https://rickandmortyapi.com/api/character/?name=${namePers}`)
      .then((data) => data.json())
      .then((data) => data.results)
      .then((data) =>
        setUserReposArr(
          data.map((item: { name: string; status: string }) => ({
            name: item.name,
            status: item.status,
          }))
        )
      )
      .catch((error) => alert(error.message));
  }

  const getMemFunc = useCallback(() => {
    getRickAndMorty();
  }, [namePers]);

  return (
    <div className="">
      <h3>Get pers from Rick and Morty</h3>
      <div>
        <input {...val} type="text" />
        <button onClick={getMemFunc}>Send</button>
      </div>
      <ul>
        {userReposArr!.map((item: { name: string; status: string }) => (
          <li>
            {item.name} {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

type MyProps = {};

type MyState = {
  value: string;
  arr: [];
};

class FirstSection extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.getGitHubUser = this.getGitHubUser.bind(this);
    this.getVal = this.getVal.bind(this);
    this.setVal = this.setVal.bind(this);
    this.mergeFoo = this.mergeFoo.bind(this);
    this.foo = this.foo.bind(this);
    this.state = {
      value: "",
      arr: [],
    };
  }

  getVal(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  componentDidMount() {
    this.foo();
  }

  foo() {
    this.setState({ value: "kaesvorelay" });
  }

  mergeFoo(): void {
    this.setVal();
    this.getGitHubUser();
  }

  setVal() {
    let repName = this.state.value;
    return repName;
  }

  async getGitHubUser() {
    const url: string = `https://api.github.com/users/${this.setVal()}/repos`;
    const response = await fetch(url);
    const us = await response.json();
    this.setState({ arr: us });
  }

  render() {
    return (
      <section className="first-section">
        <h2 className="section-title">first section</h2>
        <p className="first-section_text">
          <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ea a,{" "}
          <i>voluptatum illo</i> vero nihil enim, harum incidunt deserunt
          voluptates cupiditate provident sint! Officiis amet nesciunt
          consectetur odio, debitis deleniti sapiente?
          <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ea a,{" "}
          <i>voluptatum illo</i> vero nihil enim, harum incidunt deserunt
          voluptates cupiditate provident sint! Officiis amet nesciunt
          consectetur odio, debitis deleniti sapiente?
          <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ea a,{" "}
          <i>voluptatum illo</i> vero nihil enim, harum incidunt deserunt
          voluptates cupiditate provident sint! Officiis amet nesciunt
          consectetur odio, debitis deleniti sapiente?
          <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ea a,{" "}
          <i>voluptatum illo</i> vero nihil enim, harum incidunt deserunt
          voluptates cupiditate provident sint! Officiis amet nesciunt
          consectetur odio, debitis deleniti sapiente?
        </p>
        <div className="wrap">
          <input
            value={this.state.value}
            onChange={this.getVal}
            type="text"
            name="text"
            id="input-rep"
          />
          <button onClick={this.mergeFoo} id="search1">
            Async
          </button>
          <button id="search2">promis</button>
        </div>
        <div>
          <ul>
            {this.state.arr &&
              this.state.arr.map((item: { name: string }) => (
                <li>Rep name: {item.name}</li>
              ))}
            {this.state.arr &&
              this.state.arr.map((item: { full_name: string }) => (
                <li>Fullname: {item.full_name}</li>
              ))}
          </ul>
          <SearchComponent />
          <StarWarsBlock />
          <UserList />
        </div>
      </section>
    );
  }
}

export default FirstSection;
