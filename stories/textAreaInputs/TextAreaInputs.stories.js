import TextareaInput from './textareaInput.handlebars'

export default {
  title: 'Components/Textarea Inputs',
  component: TextareaInput,
  args: {
    label: 'Message',
    name: 'message'
  }
}

export const basic = (args) => TextareaInput(args)

export const required = (args) => TextareaInput({ ...args, required: true })

export const withError = (args) => TextareaInput({ ...args, invalid: true })
