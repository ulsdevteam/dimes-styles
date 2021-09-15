import Header from './header.handlebars'
import headerColors from './colors.json'
import Logo from '../assets/img/rac_logo.svg'
import { BUILDER_KEYS } from '@babel/types'

export const colors = () => {
  const headers = headerColors.map(c => Header({
    class: c,
  })).join('')
  return headers
}

export const withTextBrand = () => {
  const headers = headerColors.map(c => Header({
    class: c,
    withTextBrand: true,
    brandTitle: 'library.rockarch.org',
    brandSubtitle: 'The Online Bibliographic Catalog of Rockefeller Archive Center'
  })).join('')
  return headers
}

export const withImageBrand = () => {
  const headers = headerColors.map(c => Header({
    class: c,
    withImageBrand: true,
    logoUrl: Logo
  })).join('')
  return headers
}

export const withNavItems = () => Header(
  {
    class: "header--blue",
    withNavItems: true
  }
)

export const withDropdownItems = () => Header(
  {
    class: "header--white",
    withDropdownItems: true
  }
)

export const withSocialIcons = () => Header(
  {
    class: "header--white",
    withSocialIcons: true
  }
)
