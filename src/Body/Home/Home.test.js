import { configure, mount, shallow } from "enzyme";
import Home from "./Home";
import { findByTestAttr } from "../../Util/testingUtillities";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const setup = () => {
  return mount(<Home />);
};

test("Email Address Loads", () => {
  const wrapper = setup();
  const emailAddressLocation = findByTestAttr(wrapper, "email");
  expect(emailAddressLocation.exists()).toBeTruthy();
});

test("Email Address obfuscated", async () => {
  const wrapper = shallow(<Home />);
  const emailAddress = "robert@robertkstarr.com";
  expect(wrapper.text().includes(emailAddress)).not.toBeTruthy();
});

test("Logo loads", () => {
  const wrapper = setup();
  const logo = findByTestAttr(wrapper, "logo");
  expect(logo.exists()).toBeTruthy();
});
