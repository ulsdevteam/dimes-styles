import Badge from './badge.handlebars'
import badgeColors from './colors.json'

export const colors = (args) => {
  const badges = badgeColors.map(c => Badge({ class: c, ...args })).join('')
  return badges
}
