import Header from './header.handlebars'
import headerColors from './colors.json'
import Logo_white from '../../../stylesheets/assets/img/hero_logo_white.png'
import Logo_blue from '../../../stylesheets/assets/img/hero_logo_blue.png'


export default {
  component: Header,
  title: "Components/Header",
  args:{
    showMobileNavItems: false,
    showMobileDropdownItems: false,
    showDropdownItems: false
  }
};

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
    brandTitle: 'MyReadingRoom @ Archives & Special Collections',
    brandSubtitle: 'Submit requests in advance of your Reading Room visit'
  })).join('')
  return headers
}

export const withImageBrand = () => {
  let Logos = {
    'header--blue': Logo_white,
    'header--white': Logo_blue
  }
  const headers = headerColors.map(c => Header({
    class: c,
    withImageBrand: true,
    logoUrl: Logos[c]
  })).join('')
  return headers
}

export const withNavItems = (args) => Header(
  {
    ...args,
    class: "header--blue",
    withTextBrand: true,
    brandTitle: 'MyReadingRoom @ Archives & Special Collections',
    brandSubtitle: 'Submit requests in advance of your Reading Room visit',
    withNavItems: true
  }
)

export const withDropdownItems = (args) => Header(
  {
    ...args,
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
