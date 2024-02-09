import ListUnstyled from './listUnstyled.handlebars'

export default {
  component: ListUnstyled,
  title: "Global/Helpers",
  args: {
    listUnstyled: true
  }
};

export const listUnstyled = (args) => ListUnstyled(args)