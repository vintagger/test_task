import { ImageList } from "@mui/material";
import react from "react";
import { Component } from "react";
import classes from "./App.css";
import { Header } from "./Components/Header/Header";
import { Panel } from "./Components/Panel/Panel";
import StandardImageList, { Window } from "./Components/Window/Window";
import photo from "./photo.jpg";

// import Window from "./Components/Window/Window";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { background: photo, isDisplayed: false };
  }
  toggleOpenClose = () => {
    this.setState((state) => ({ ...state, isDisplayed: !state.isDisplayed }));
  };
  render() {
    return (
      <div>
        <div
          className="app-wrapper"
          style={{ backgroundImage: `url(${this.state.background})` }}
        >
          <Header />
          <Panel toggleOpenClose={this.toggleOpenClose} />
          <Window
            onBackgoundChange={(newPhoto) => {
              this.setState({ ...this.state, background: newPhoto });
            }}
            isDisplayed={this.state.isDisplayed}
          />
        </div>
        {/* <img
          className={classes.image}
          src={this.state.background}
          id="qq"
        ></img> */}
        <div>
          {/* <Panel />
          <Window
            onBackgoundChange={(newPhoto) => {
              this.setState({ ...this.state, background: newPhoto });
            }}
          /> */}
          {/* <StandardImageList /> */}
        </div>
      </div>
    );
  }
}

export default App;
