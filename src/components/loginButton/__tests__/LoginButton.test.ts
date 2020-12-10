import LoginButton from "@/components/loginButton/LoginButton.vue";
import { render } from "@testing-library/vue";

describe("LoginButton vue-test-utils", () => {
  test("should render component", () => {
    const { getByText } = render(LoginButton);
    getByText("Login");
  });
});
