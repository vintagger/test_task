import react from "react";
import classes from "./Header.module.css";
import logo from "./apple-icon.png";
import Clock from "../Clock/Clock";
import { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header className={classes.header}>
        <img className={classes.logo} src={logo}></img>
        <Clock />
      </header>
    );
  }
}
