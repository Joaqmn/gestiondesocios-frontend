import { mount } from "@vue/test-utils";
import InputText from "@/components/inputText/InputText.vue";
import { fireEvent } from "@testing-library/dom";
import { render, screen } from "@testing-library/vue";

describe("Counter vue-test-utils", () => {
  test("should render component", () => {
    const input = render(InputText);
    expect(input).toBeInTheDocument();
  });
});
