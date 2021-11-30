import React, { useCallback, useState } from 'react';

import Block from '../hooks/castomHook';
import useInput from '../hooks/useHook';
import Rick from '../components/Rick-block';
import StarWarsBlock from './StarWars-block';

function SearchComponent() {
  let val = useInput();
  let namePers = val.value;
  const [userReposArr, setUserReposArr] = useState();
  async function getRickAndMorty(namePers) {
    const url = `https://rickandmortyapi.com/api/character/?name=${namePers}`;
    let response = await fetch(url);
    let arr = await response.json();
    setUserReposArr(arr);
    return arr;
  }
  const getMemFunc = useCallback(() => {
    getRickAndMorty(namePers);
  }, [namePers]);
  return (
    <div className="">
      <div>
        <input {...val} type="text" />
        <button onClick={getMemFunc}>Send</button>
      </div>
      <p>
        {userReposArr &&
          userReposArr.results.map((item) => (
            <li>
              {item.name} {item.status}
            </li>
          ))}
      </p>
    </div>
  );
}

class FirstSection extends React.Component {
  constructor(props) {
    super(props);
    this.getGitHubUser = this.getGitHubUser.bind(this);
    this.getVal = this.getVal.bind(this);
    this.setVal = this.setVal.bind(this);
    this.mergeFoo = this.mergeFoo.bind(this);
    this.foo = this.foo.bind(this);
    this.state = {
      value: '',
      arr: []
    };
  }

  getVal(e) {
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  componentDidMount() {
    this.foo();
  }

  foo() {
    this.setState({ value: 'kaesvorelay' });
  }

  mergeFoo() {
    this.setVal();
    this.getGitHubUser();
  }

  setVal() {
    let repName = this.state.value;
    return repName;
  }

  async getGitHubUser() {
    const url = `https://api.github.com/users/${this.setVal()}/repos`;
    const response = await fetch(url);
    const us = await response.json();
    this.setState({ arr: us });

    return console.log(this.state.arr.lenght);
  }

  render() {
    return (
      <section className="first-section">
        <h2 className="section-title">first section</h2>
        <p className="first-section_text">
          <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ea a,{' '}
          <i>voluptatum illo</i> vero nihil enim, harum incidunt deserunt
          voluptates cupiditate provident sint! Officiis amet nesciunt
          consectetur odio, debitis deleniti sapiente?
          <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ea a,{' '}
          <i>voluptatum illo</i> vero nihil enim, harum incidunt deserunt
          voluptates cupiditate provident sint! Officiis amet nesciunt
          consectetur odio, debitis deleniti sapiente?
          <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ea a,{' '}
          <i>voluptatum illo</i> vero nihil enim, harum incidunt deserunt
          voluptates cupiditate provident sint! Officiis amet nesciunt
          consectetur odio, debitis deleniti sapiente?
          <b>Lorem ipsum</b> dolor sit amet consectetur, adipisicing elit. Ea a,{' '}
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
              this.state.arr.map((item) => <li>Rep name: {item.name}</li>)}
            {this.state.arr &&
              this.state.arr.map((item) => <li>Fullname: {item.full_name}</li>)}
          </ul>
          <Block />
          <SearchComponent />
          <Rick />
          <StarWarsBlock />
        </div>
      </section>
    );
  }
}

export default FirstSection;
