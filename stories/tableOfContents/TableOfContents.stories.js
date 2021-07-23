import TableOfContents from './tableOfContents.handlebars'

export const neutral = (args) => TableOfContents({ class: 'toc--neutral', ...args })

export const blue = (args) => TableOfContents({ class: 'toc--blue', ...args })

export const orange = (args) => TableOfContents({ class: 'toc--orange', ...args })

export const withTitle = (args) => TableOfContents({ class: 'toc--neutral', ...args })
