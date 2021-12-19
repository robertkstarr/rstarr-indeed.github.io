import { configure, mount } from "enzyme";
import React from "react";
import SiteFooter from "./SiteFooter";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("Footer shows correct year", () => {
  const wrapper = mount(<SiteFooter />);
  const year = "2021";
  expect(wrapper.text().includes(year)).toBeTruthy();
});
