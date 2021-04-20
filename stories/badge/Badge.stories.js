import '../../dist/main.min.css'

import Badge from './badge.handlebars'
import colors from './colors.json'

export default {
  title: 'Components/Badges',
  component: Badge,
  args: {
    text: '12 matches'
  }
}

export const Colors = (args) => {
  const badges = colors.map(c => Badge({ class: c, ...args })).join('')
  return badges
}
