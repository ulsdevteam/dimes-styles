import SkipLink from './skipLink.handlebars'

export const colors = (args) => {
  const componentColors = ['skip-link--blue', 'skip-link--orange']
  const skipLinks = componentColors.map(c => SkipLink({ class: c, ...args })).join('')
  return skipLinks
}
