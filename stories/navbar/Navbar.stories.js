import Navbar from './navbar.handlebars'
import colors from './colors.json'

export default {
  title: 'Components/Navbar',
  component: Navbar
}

export const Colors = () => {
  const navbars = colors.map(c => Navbar({
    class: c,
    withBrandText: true,
    brandTitle: 'library.rockarch.org',
    brandSubtitle: 'The Online Bibliographic Catalog of Rockefeller Archive Center'
  })).join('')
  return navbars
}

export const WithTextBrand = () => Navbar(
  {
    withBrandText: true,
    brandTitle: 'library.rockarch.org',
    brandSubtitle: 'The Online Bibliographic Catalog of Rockefeller Archive Center'
  }
)

export const WithImageBrand = () => Navbar(
  {
    withBrandImage: true
  }
)

export const WithNavItems = () => Navbar(
  {
    withNavItems: true
  }
)

export const WithDropdownItems = () => Navbar(
  {
    withDropdownItems: true
  }
)

export const WithSocialIcons = () => Navbar(
  {
    withSocialIcons: true
  }
)
