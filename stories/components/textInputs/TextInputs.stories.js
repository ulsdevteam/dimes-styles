import TextInput from './textInput.handlebars'

export default {
  component: TextInput,
  title: "Components/Text Input",
  args:{
    label: 'First Name',
    name: 'first_name'
  }
};

export const basic = (args) => TextInput(args)

export const required = (args) => TextInput({ ...args, required: true })

export const hideLabel = (args) => TextInput({ ...args, hideLabel: true })

export const helpText = (args) => TextInput({ ...args, helpText: true })

export const withError = (args) => TextInput({ ...args, required: true, invalid: true })
