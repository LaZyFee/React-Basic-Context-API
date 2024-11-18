import React from "react";
import "./App.css";
import Section from "./Components/Section";
import ThemeContext from "./Contexts/ThemeContext";

export default class App extends React.Component {
  state = {
    theme: "light",
  };
  render() {
    const { theme } = this.state;
    return (
      <div className="App">
        <h1>Hello world</h1>
        <ThemeContext.Provider value={{ theme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
