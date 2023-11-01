import Spacing from './spacing.handlebars'

export default {
  component: Spacing,
  title: "Global/Spacing",
  args:{
    class: 'py-20 px-10 mb-10',
    text: 'Test margin and padding utility classes'
  }
};

export const basic = (args) => Spacing(args)
