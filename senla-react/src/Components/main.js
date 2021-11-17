import React from 'react'
import FirstSection from './first-section'
import SecondSection from './second-section'

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

export default Main