import { configure, shallow } from "enzyme";
import Contact, { EMAIL_ADDRESS, PHONE_NUMBER } from "./Contact";
import { findByTestAttr } from "../../Util/testingUtillities";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
const setup = () => {
  return shallow(<Contact />);
};

test("Email address loads", () => {
  const wrapper = setup();
  const emailAddressLocation = findByTestAttr(wrapper, "email");
  expect(emailAddressLocation.exists()).toBeTruthy();
});

test("Email Address obfuscated", async () => {
  const wrapper = setup();
  const emailAddressLocation = findByTestAttr(wrapper, "email");
  expect(emailAddressLocation.text().includes(EMAIL_ADDRESS)).not.toBeTruthy();
});

test("Phone number loads", () => {
  const wrapper = setup();
  const phoneNumberLocation = findByTestAttr(wrapper, "email");
  expect(phoneNumberLocation.exists()).toBeTruthy();
});

test("Phone number obfuscated", () => {
  const wrapper = setup();
  const phoneNumberLocation = findByTestAttr(wrapper, "email");
  expect(phoneNumberLocation.text().includes(PHONE_NUMBER)).not.toBeTruthy();
});
