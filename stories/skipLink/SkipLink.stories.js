import SkipLink from './skipLink.handlebars'

export default {
  title: 'Components/Skip Link',
  component: SkipLink,
  args: {
    text: 'Skip to main content'
  }
}

export const Displayed = (args) => SkipLink({ hidden: false, ...args })
export const Hidden = (args) => SkipLink({ hidden: true, ...args })
