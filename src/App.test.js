import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// I can't really pretend I know what I'm doing here to make this singular test pass.
global.scrollTo = jest.fn();

beforeAll(() => {
  window.getSelection = () => {
    return {
      removeAllRanges: () => {}
    };
  };
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
