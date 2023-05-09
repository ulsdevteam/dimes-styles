import TextareaInput from './textareaInputs.handlebars'

export const basic = (args) => TextareaInput(args)

export const required = (args) => TextareaInput({ ...args, required: true })

export const hideLabel = (args) => TextareaInput({ ...args, hideLabel: true })

export const helpText = (args) => TextareaInput({ ...args, helpText: true })

export const withError = (args) => TextareaInput({ ...args, invalid: true })
