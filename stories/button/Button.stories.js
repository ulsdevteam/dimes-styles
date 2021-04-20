import { storiesOf } from '@storybook/html'

import '../../dist/main.min.css'

import Button from './button.handlebars'
import buttonData from './button.json'
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
  const buttons = colors.map(c => Button({ ...buttonData, class: c, ...args })).join('')
  return buttons
}

export const Sizes = (args) => {
  const buttons = sizes.map(s => Button({ ...buttonData, class: s, ...args })).join('')
  return buttons
}

export const Icons = (args) => Button({ ...buttonData, iconAfter: 'email', ...args })
Icons.args = {
  iconBefore: 'email',
  iconAfter: ''
}

export const FullWidth = (args) => Button({ ...buttonData, class: 'btn--block', ...args })
