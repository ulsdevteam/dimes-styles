import Footer from './footer.handlebars'

export default {
  component: Footer,
  title: "Components/Footer"
};

export const basic = () => Footer()

export const withSecondaryFooter = () => Footer({ showSecondary: true })
