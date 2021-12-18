import React from "react";
import { render } from "@testing-library/react";
import { configure } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("App renders", () => {
  render(<App />);
});
