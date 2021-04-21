import Select from './select.handlebars'

export default {
  title: 'Components/Select',
  component: Select,
  args: {
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
}

export const Default = (args) => Select(args)

export const Required = (args) => Select({ ...args, required: true })

export const WithError = (args) => Select({ ...args, required: true, invalid: true })
