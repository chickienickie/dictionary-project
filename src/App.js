import React, { Component } from 'react'
import Typical from 'react-typical'
import Dictionary from "./Dictionary"
import "./App.css";


const steps = [
  'What word would you like to look up?', 1000,
];
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Dictionary App</h1>
        <Typical steps={steps} loop={1} className="typical" />
        <main>
          <Dictionary />
        </main>

      </div>
    )
  }
}