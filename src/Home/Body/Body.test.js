import { configure, mount } from "enzyme";
import Body from "./Body";
import Provider from "../../Context/Provider";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../../Util/testingUtillities";

configure({ adapter: new Adapter() });

const setup = () => {
  return mount(
    <Provider>
      <Body />
    </Provider>
  );
};

test("Body loads", () => {
  setup();
});

test("Body begins on 'Home'", () => {
  const wrapper = setup();
  const homeComponent = findByTestAttr(wrapper, "HomeElement");
  expect(homeComponent.exists()).toBeTruthy();
});
