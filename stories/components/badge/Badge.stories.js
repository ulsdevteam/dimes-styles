import Badge from './badge.handlebars'
import badgeColors from './colors.json'

export default {
  component: Badge,
};

export const colors = (args) => {
  const badges = badgeColors.map(c => Badge({ class: c, ...args })).join('')
  return badges
}
