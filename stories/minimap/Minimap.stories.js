import Minimap from './minimap.handlebars'

export const basic = () => Minimap()

export const tenAcross = () => Minimap({ count: 10 })

export const twentyAcross = () => Minimap({ count: 20 })
