import Minimap from './minimap.handlebars'

export default {
  component: Minimap,
  title: "Components/Minimap"
};

export const basic = () => Minimap()

export const tenAcross = () => Minimap({ countAcross: 10 })

export const twentyAcross = () => Minimap({ countAcross: 20 })
