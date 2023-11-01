import Dropdown from './dropdown.handlebars'

export default {
  component: Dropdown,
  title: "Components/Dropdown",
  args:{
    showDropdownItems: false,
    buttonText:'Actions',
    iconBefore: 'settings',
    linkTarget: '#'
  }
};

export const basic = (args) => Dropdown(args)