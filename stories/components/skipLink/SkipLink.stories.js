import SkipLink from './skipLink.handlebars'

export default {
  component: SkipLink,
  title: "Components/Skip Link",
  args:{
    text: 'Skip to main content',
    shown: false
  }
};

export const basic = (args) => SkipLink({ ...args })
