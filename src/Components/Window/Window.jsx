import React from "react";
import classes from "./Window.module.css";

export const Window = ({ onBackgoundChange, isDisplayed }) => {
  return (
    <div>
      {isDisplayed && <WindowToOpen onBackgoundChange={onBackgoundChange} />}
    </div>
  );
};
const WindowToOpen = ({ onBackgoundChange }) => (
  <div className={classes.window}>
    <img
      onClick={() =>
        onBackgoundChange(
          "https://images.unsplash.com/photo-1631986960110-15ff795482dc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
        )
      }
      className={classes.miniature}
      style={{ border: "1px solid grey" }}
      src="https://images.unsplash.com/photo-1631986960110-15ff795482dc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
    ></img>

    <img
      onClick={() =>
        onBackgoundChange(
          "https://images.unsplash.com/photo-1631478409245-d8f0e2c7d680?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        )
      }
      className={classes.miniature}
      style={{ border: "1px solid grey" }}
      src="https://images.unsplash.com/photo-1631478409245-d8f0e2c7d680?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ></img>
    <img
      onClick={() =>
        onBackgoundChange(
          "https://images.unsplash.com/photo-1463681457836-cc9f3f99608b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        )
      }
      className={classes.miniature}
      style={{ border: "1px solid grey" }}
      src="https://images.unsplash.com/photo-1463681457836-cc9f3f99608b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ></img>
  </div>
);
