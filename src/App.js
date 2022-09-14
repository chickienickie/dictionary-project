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

        <footer className="App-footer">
          This project was coded by Nickie Potter and is open-sourced on{" "}
          <a
            href="https://github.com/chickienickie/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://np-dictionary-project.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>

      </div>
    )
  }
}