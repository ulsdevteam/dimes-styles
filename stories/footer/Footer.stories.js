import Footer from './footer.handlebars'

export default {
  title: 'Components/Footer',
  component: Footer
}

export const Default = () => Footer()

export const WithSecondaryFooter = () => Footer({ showSecondary: true })
