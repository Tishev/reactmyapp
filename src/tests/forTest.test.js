import ForTest from "../ForTest";
import { render } from "@testing-library/react";

describe("forTest render test", () => {
  it("snapshot test", () => {
    const component = render(<ForTest />);

    expect(component).toMatchSnapshot();
  });
});
