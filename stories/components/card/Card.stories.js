import Card from './card.handlebars'

export default {
  component: Card,
};

export const basic = (args) => Card(args)

export const noFooter = (args) => Card({ ...args, footerText: null })
