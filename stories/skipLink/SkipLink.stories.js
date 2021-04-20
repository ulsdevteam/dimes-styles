import SkipLink from './skipLink.handlebars'

export default {
  title: 'Components/Skip Link',
  component: SkipLink,
  args: {
    text: 'Skip to main content',
    hidden: false
  }
}

export const Default = (args) => SkipLink({ ...args })
