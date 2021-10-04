import Minimap from './minimap.handlebars'

export const basic = () => Minimap()

export const tenAcross = () => Minimap({ countAcross: 10 })

export const twentyAcross = () => Minimap({ countAcross: 20 })
