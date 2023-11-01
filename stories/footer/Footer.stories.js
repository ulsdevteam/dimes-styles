import Footer from './footer.handlebars'

export default {
  component: Footer,
};

export const basic = () => Footer()

export const withSecondaryFooter = () => Footer({ showSecondary: true })
