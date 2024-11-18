import React from "react";
import "./App.css";
import Section from "./Components/Section";
import ThemeContext from "./Contexts/ThemeContext";

export default class App extends React.Component {
  state = {
    theme: "light",
  };
  switchTheme = () => {
    this.setState(({ theme }) => {
      if (theme === "dark") {
        return {
          theme: "light",
        };
      }
      return {
        theme: "dark",
      };
    });
  };
  render() {
    const { theme } = this.state;
    return (
      <div className="App">
        <h1>Hello world</h1>
        <ThemeContext.Provider value={{ theme, switchTheme: this.switchTheme }}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
