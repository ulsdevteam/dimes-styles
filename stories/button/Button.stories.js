import Button from './button.handlebars'
import Link from './link.handlebars'
import buttonColors from './colors.json'
import buttonSizes from './sizes.json'

export const colors = (args) => {
  const buttons = buttonColors.map(c => Button({ class: c, ...args })).join('')
  return buttons
}

export const sizes = (args) => {
  const buttons = buttonSizes.map(s => Button({ class: s, ...args })).join('')
  return buttons
}

export const icons = (args) => Button({ iconAfter: 'email', class: 'btn--lg btn--light-blue', ...args })
icons.args = {
  iconBefore: 'email',
  iconAfter: ''
}

export const fullWidth = (args) => Button({ class: 'btn--block btn--blue btn--lg', ...args })

export const link = (args) => Link(args)
