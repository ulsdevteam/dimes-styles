import Header from './header.handlebars'
import headerColors from './colors.json'
import Logo from '../assets/img/rac_logo.svg'

export const colors = () => {
  const headers = headerColors.map(c => Header({
    class: c,
    withBrandText: true,
    brandTitle: 'library.rockarch.org',
    brandSubtitle: 'The Online Bibliographic Catalog of Rockefeller Archive Center'
  })).join('')
  return headers
}

export const withTextBrand = () => Header(
  {
    withTextBrand: true,
    brandTitle: 'library.rockarch.org',
    brandSubtitle: 'The Online Bibliographic Catalog of Rockefeller Archive Center'
  }
)

export const withImageBrand = () => Header(
  {
    withImageBrand: true,
    logoUrl: Logo
  }
)

export const withNavItems = () => Header(
  {
    withNavItems: true
  }
)

export const withDropdownItems = () => Header(
  {
    withDropdownItems: true
  }
)

export const withSocialIcons = () => Header(
  {
    withSocialIcons: true
  }
)
