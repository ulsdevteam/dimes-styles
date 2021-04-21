import '../../dist/main.min.css'

import Button from './button.handlebars'
import colors from './colors.json'
import sizes from './sizes.json'

export default {
  title: 'Components/Buttons',
  component: Button,
  args: {
    text: 'Click me'
  }
}

export const Colors = (args) => {
  const buttons = colors.map(c => Button({ class: c, ...args })).join('')
  return buttons
}

export const Sizes = (args) => {
  const buttons = sizes.map(s => Button({ class: s, ...args })).join('')
  return buttons
}

export const Icons = (args) => Button({ iconAfter: 'email', class: 'btn-primary', ...args })
Icons.args = {
  iconBefore: 'email',
  iconAfter: ''
}

export const FullWidth = (args) => Button({ class: 'btn--block', ...args })
