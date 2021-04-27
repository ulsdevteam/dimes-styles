import TextAreaInput from './textAreaInput.handlebars'

export default {
  title: 'Components/Text Area Inputs',
  component: TextAreaInput,
  args: {
    label: 'Message',
    name: 'message'
  }
}

export const Default = (args) => TextAreaInput(args)

export const Required = (args) => TextAreaInput({ ...args, required: true })

export const WithError = (args) => TextAreaInput({ ...args, invalid: true })
