import Checkbox from './checkbox.handlebars'
import CheckboxGroup from './checkboxFieldset.handlebars'
import checkboxColors from './colors.json'
import checkboxItems from './items.json'

export default {
  component: Checkbox,
  title: "Components/Checkbox"
};

export const colors = (args) => (
  checkboxColors.map(c => Checkbox({ class: c.class, name: c.name, text: c.text, ...args })).join('')
)

export const required = (args) => Checkbox(args)
required.args = {
  class: 'checkbox--orange',
  text: 'Very important checkbox',
  name: 'value',
  required: true
}

export const groupedCheckboxes = (args) => CheckboxGroup(args)
groupedCheckboxes.args = {
  legend: 'Format',
  items: checkboxItems
}
