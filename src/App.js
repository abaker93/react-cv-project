import React, { Component } from "react";
import Aside from './components/Aside';
import Form from './components/Form';
import "./styles/styles.css";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Aside />
        <main id="main">
          <Form />
        </main>
      </div>
    )
  }
}

export default App;