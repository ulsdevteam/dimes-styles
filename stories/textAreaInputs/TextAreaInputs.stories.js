import TextareaInput from './textareaInput.handlebars'

export const basic = (args) => TextareaInput(args)

export const required = (args) => TextareaInput({ ...args, required: true })

export const withError = (args) => TextareaInput({ ...args, invalid: true })
