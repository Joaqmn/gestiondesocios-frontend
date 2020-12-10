import InputText from "../InputText.vue";

export default { title: "Components/InputText" };

const Text = (args, { argTypes }) => ({
  components: { InputText },
  props: Object.keys(argTypes),
  template:
    '<InputText :typeInput="typeInput" :nameInput="nameInput" :placeHolderInput="placeHolderInput" />'
});
export const TextInput = Text.bind({});
TextInput.args = {typeInput: 'text', nameInput: 'Text', placeHolderInput: 'Introduzca su email'}

