import UserDropdown from "@/components/userDropdown/UserDropdown.vue";
import { render } from "@testing-library/vue";

describe("UserDropdown vue-test-utils", () => {
  test("should render component", () => {
    const { getByText } = render(UserDropdown);
    getByText("Perfil");
  });
});
