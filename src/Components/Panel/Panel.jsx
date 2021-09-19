import classes from "./Panel.module.css";
import { render } from "@testing-library/react";
import { Component } from "react";

export class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = { toggleOpenClose: props.toggleOpenClose };
  }
  render() {
    return (
      <div className={classes.panel}>
        <div className={classes.scale}>
          <button className={classes.button_mail}></button>
        </div>
        <div className={classes.scale}>
          <button className={classes.button_firefox}></button>
        </div>
        <div className={classes.scale}>
          <button
            className={classes.button_settings}
            onClick={() => this.state.toggleOpenClose()}
          ></button>
        </div>
        <div className={classes.scale}>
          <button className={classes.button_telegram}></button>
        </div>
        <div className={classes.scale}>
          <button className={classes.button_terminal}></button>
        </div>
        <div className={classes.scale}>
          <button className={classes.button_basket}></button>
        </div>
      </div>
    );
  }
}
