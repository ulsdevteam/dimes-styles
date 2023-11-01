import Select from './select.handlebars'

export default {
  component: Select,
  title: "Components/Select",
  args:{
    hideLabel: false,
    label: 'Choose a search field',
    name: 'field',
    options: [
      {
        value: '',
        label: 'Everything'
      },
      {
        value: 'title',
        label: 'Title'
      },
      {
        value: 'author',
        label: 'Author'
      },
      {
        value: 'subject',
        label: 'Subject'
      }
    ]
  }
};

export const basic = (args) => Select(args)

export const required = (args) => Select({ ...args, required: true })

export const hideLabel = (args) => Select({ ...args, hideLabel: true })

export const withError = (args) => Select({ ...args, required: true, invalid: true })
