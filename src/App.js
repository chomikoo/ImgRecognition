import React, { Component } from "react";
import "./App.css";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import ImageRecognition from "./components/ImageRecognition/ImageRecognition";

const app = new Clarifai.App({
  apiKey: "8c943830b8a646e987025e3b8df27584"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      box: {}
    };
  }

  calculateLocation = data => {
    const area = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: area.left_col * width,
      topRow: area.top_row * height,
      rightCol: width - area.right_col * width,
      bottomRow: height - area.bottom_row * height
    };
  };

  displayBox = box => {
    this.setState({ box: box });
  };

  inputHandler = e => {
    this.setState({
      imageUrl: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.imageUrl)
      .then(response => this.displayBox(this.calculateLocation(response)))
      .catch(err => console.log("err", err));
  };

  render() {
    const { imageUrl, box } = this.state;
    return (
      <div className="container">
        <div className="flex items-center justify-between mv5">
          <Logo />
          <Navigation />
        </div>
        <ImageLinkForm
          inputHandler={this.inputHandler}
          submitHandler={this.submitHandler}
        />
        <ImageRecognition imageUrl={imageUrl} box={box} />
      </div>
    );
  }
}

export default App;
