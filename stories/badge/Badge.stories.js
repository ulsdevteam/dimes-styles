import '../../dist/main.min.css'

import Badge from './badge.handlebars'
import badgeColors from './colors.json'

// export default {
//   title: 'Components/Badges',
//   component: Badge,
//   args: {
//     text: '12 matches'
//   }
// }

export const colors = (args) => {
  const badges = badgeColors.map(c => Badge({ class: c, ...args })).join('')
  return badges
}

export const basic = (args) => {
  const badges = badgeColors.map(c => Badge({ class: c, ...args })).join('')
  return badges
}
