import Checkbox from './checkbox.handlebars'
import CheckboxGroup from './checkboxFieldset.handlebars'
import colors from './colors.json'
import items from './items.json'

export default {
  title: 'Components/Checkboxes',
  component: Checkbox
}

export const Colors = (args) => {
  const badges = colors.map(c => Checkbox({ class: c, ...args })).join('')
  return badges
}
Colors.args = {
  text: 'Rural development -- Congresses (2)',
  name: 'subject'
}

export const GroupedCheckboxes = (args) => CheckboxGroup(args)
GroupedCheckboxes.args = {
  legend: 'Fruits',
  items: items
}
