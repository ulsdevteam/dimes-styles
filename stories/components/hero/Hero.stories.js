import Hero from './hero.handlebars'
import Logo from '../../../stylesheets/assets/img/hero_logo.svg'
import logoColors from './colors.json'
import Logo_white from '../../../stylesheets/assets/img/hero_logo_white.png'
import Logo_blue from '../../../stylesheets/assets/img/hero_logo_blue.png'

export default {
  component: Hero,
  title: "Components/Hero",
};

export const basic = {
  args:{
    altText: "",
    logoUrl: Logo,
    text: ''
  },
}

export const colors = () => {
  let Logos = {
    white: Logo_blue,
    blue: Logo_white
  };
  const Heros = logoColors.map(c => Hero({
    altText: "",
    logoUrl: Logos[c],
    text: '',
  })).join('');
  return Heros;
};
