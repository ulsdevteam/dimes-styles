import Hero from './hero.handlebars'
import Logo from '../assets/img/home_page_logo.svg'

export default {
  title: 'Components/Hero',
  component: Hero,
  args: {
    altText: 'Rockefeller Archive Center',
    imageUrl: Logo,
    text: 'The Rockefeller Archive Center is a major repository and research center for the study of philanthropy and its impact throughout the world.'
  }
}

export const Default = (args) => Hero(args)
