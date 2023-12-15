import Alert from './alert.handlebars'
import alertColors from './colors.json'

export default {
  component: Alert,
  title: "Components/Alert",
  args:{
    dismissable: false,
    icon: '',
    title: '',
    text: 'The Rockefeller Archive Center reading room is now open to researchers.',
  }
};

export const basic = (args) => Alert({ ...args, color: 'alert--orange' })

export const colors = (args) => {
  const alerts = alertColors.map(c => Alert({ ...args, color: c })).join('')
  return alerts
}

export const title = (args) => Alert({
  ...args,
  color: 'alert--orange', 
  title: 'Reading Room Update' })

export const icons = (args) => Alert({
  ...args,
  color: 'alert--orange',
  icon: 'error_outline' })

export const dismissable = (args) => Alert({
  ...args,
  color: 'alert--orange',
  dismissable: true })