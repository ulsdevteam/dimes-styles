import TextInput from './textInput.handlebars'

export const basic = (args) => TextInput(args)

export const required = (args) => TextInput({ ...args, required: true })

export const withError = (args) => TextInput({ ...args, required: true, invalid: true })
