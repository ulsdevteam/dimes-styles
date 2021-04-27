import Header from './header.handlebars'
import colors from './colors.json'

export default {
  title: 'Components/Header',
  component: Header
}

export const Colors = () => {
  const headers = colors.map(c => Header({
    class: c,
    withBrandText: true,
    brandTitle: 'library.rockarch.org',
    brandSubtitle: 'The Online Bibliographic Catalog of Rockefeller Archive Center'
  })).join('')
  return headers
}

export const WithTextBrand = () => Header(
  {
    withBrandText: true,
    brandTitle: 'library.rockarch.org',
    brandSubtitle: 'The Online Bibliographic Catalog of Rockefeller Archive Center'
  }
)

export const WithImageBrand = () => Header(
  {
    withBrandImage: true
  }
)

export const WithNavItems = () => Header(
  {
    withNavItems: true
  }
)

export const WithDropdownItems = () => Header(
  {
    withDropdownItems: true
  }
)

export const WithSocialIcons = () => Header(
  {
    withSocialIcons: true
  }
)
