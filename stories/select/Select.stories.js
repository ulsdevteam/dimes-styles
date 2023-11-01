import Select from './select.handlebars'

export default {
  component: Select,
};

export const basic = (args) => Select(args)

export const required = (args) => Select({ ...args, required: true })

export const hideLabel = (args) => Select({ ...args, hideLabel: true })

export const withError = (args) => Select({ ...args, required: true, invalid: true })
