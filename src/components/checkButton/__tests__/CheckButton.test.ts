import CheckButton from "@/components/checkButton/CheckButton.vue";
import { render, fireEvent } from "@testing-library/vue";

describe("CheckButton vue-test-utils", () => {
  test("should render component", () => {
    const { getByText } = render(CheckButton);
    getByText("Todos");
    getByText("Disponibles");
    getByText("No Disponibles");
  });
  test("should check if component is checked and unchecked", async () => {
    const { getByLabelText } = render(CheckButton);
    const checkTodos = getByLabelText("rellenarTodosJuegos");
    const checkDisponible = getByLabelText("rellenarJuegosDisponibles");
    const checkNoDisponible = getByLabelText("rellenarJuegosNoDisponibles");

    await fireEvent.click(checkDisponible);
    expect(checkDisponible).toBeChecked();
    expect(checkTodos).not.toBeChecked();
    expect(checkNoDisponible).not.toBeChecked();

    await fireEvent.click(checkTodos);
    expect(checkTodos).toBeChecked();
    expect(checkDisponible).not.toBeChecked();
    expect(checkNoDisponible).not.toBeChecked();

    await fireEvent.click(checkNoDisponible);
    expect(checkNoDisponible).toBeChecked();
    expect(checkTodos).not.toBeChecked();
    expect(checkDisponible).not.toBeChecked();
  });
});
