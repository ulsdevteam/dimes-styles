import Search from './search.handlebars'

export default {
  title: 'Components/Search',
  component: Search,
  args: {
    hideLabel: true,
    controlsBlock: true,
    controlsInline: false,
    button: true
  }
}

export const Default = (args) => Search(args)
