import Hero from './hero.handlebars'
import Logo from '../../stylesheets/assets/img/hero_logo.png'

export default {
  component: Hero,
  title: "Components/Hero",
  args:{
    altText: "",
    logoUrl: Logo,
    text: 'The Rockefeller Archive Center is a major repository and research center for the study of philanthropy and its impact throughout the world.'
  }
};

export const basic = (args) => Hero(args)
