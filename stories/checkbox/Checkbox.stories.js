import Checkbox from './checkbox.handlebars'
import CheckboxGroup from './checkboxFieldset.handlebars'
import checkboxColors from './colors.json'
import checkboxItems from './items.json'

export const colors = (args) => {
  const badges = checkboxColors.map(c => Checkbox({ class: c, ...args })).join('')
  return badges
}
colors.args = {
  text: 'Rural development -- Congresses (2)',
  name: 'subject'
}

export const required = (args) => Checkbox(args)
required.args = {
  text: 'Very important checkbox',
  name: 'value',
  required: true
}

export const groupedCheckboxes = (args) => CheckboxGroup(args)
groupedCheckboxes.args = {
  legend: 'Fruits',
  items: checkboxItems
}
