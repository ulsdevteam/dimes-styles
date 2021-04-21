import TextInput from './textInput.handlebars'

export default {
  title: 'Components/Text Inputs',
  component: TextInput,
  args: {
    label: 'First Name',
    name: 'first_name'
  }
}

export const Default = (args) => TextInput(args)

export const Required = (args) => TextInput({ ...args, required: true })

export const WithError = (args) => TextInput({ ...args, required: true, invalid: true })
