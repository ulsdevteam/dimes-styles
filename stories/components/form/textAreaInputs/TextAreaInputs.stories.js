import TextareaInput from './textareaInputs.handlebars'

export default {
  component: TextareaInput,
  title: "Components/Form/Textarea Inputs",
  args:{
    label: 'Message',
    name: 'message'
  }
};

export const basic = (args) => TextareaInput(args)

export const required = (args) => TextareaInput({ ...args, required: true })

export const helpText = (args) => TextareaInput({ ...args, helpText: true })

export const withError = (args) => TextareaInput({ ...args, invalid: true })
