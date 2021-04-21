import Card from './card.handlebars'

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    titleText: 'Guide to Processing Collections',
    linkTarget: 'https://rockarch.org',
    bodyText: 'arrangement and description',
    footerText: 'Last updated Tuesday, Mar 31 2020 2:30 PM'
  }
}

export const Default = (args) => Card(args)

export const NoFooter = (args) => Card({ ...args, footerText: null })
