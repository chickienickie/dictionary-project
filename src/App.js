import React, { Component } from 'react'
import Typical from 'react-typical'
import Dictionary from "./Dictionary"


const steps = [
  'What word would you like to look up?', 2000,
];
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Dictionary App</h1>
        <Typical steps={steps} loop={Infinity} />
        <main>
          <Dictionary />
        </main>
      </div>
    )
  }
}