import InputText from "@/components/inputText/InputText.vue";
import { render } from "@testing-library/vue";

describe("InputText vue-test-utils", () => {
  test("should render component with prop placeholder email", () => {
    const { getByPlaceholderText } = render(InputText, {
      props: {
        typeInput: "text",
        placeHolderInput: "Introduzca su email"
      }
    });
    getByPlaceholderText("Introduzca su email");
  });
  test("should render component with prop placeholder password", () => {
    const { getByPlaceholderText } = render(InputText, {
      props: {
        typeInput: "password",
        placeHolderInput: "Introduzca su contraseña"
      }
    });
    getByPlaceholderText("Introduzca su contraseña");
  });
});
