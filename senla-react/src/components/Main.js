import React from 'react';
import FirstSection from './First-section';
import SecondSection from './Second-section';

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <FirstSection />
        <SecondSection />
      </main>
    );
  }
}

export default Main;
