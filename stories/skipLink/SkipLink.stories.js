import SkipLink from './skipLink.handlebars'

export default {
  title: 'Components/Skip Link',
  component: SkipLink,
  args: {
    text: 'Skip to main content',
    hidden: false
  }
}

export const Colors = (args) => {
  const colors = ['skip-link--blue', 'skip-link--orange']
  const skipLinks = colors.map(c => SkipLink({ class: c, ...args })).join('')
  return skipLinks
}
