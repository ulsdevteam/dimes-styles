import TableOfContents from './tableOfContents.handlebars'

export const colors = (args) => {
  const componentColors = ['toc--neutral', 'toc--blue', 'toc--orange']
  const tocs = componentColors.map(c => TableOfContents({ class: c, ...args })).join('')
  return tocs
}

export const withTitle = (args) => TableOfContents({ class: 'toc--neutral', title: 'Digital Preservation Policy', ...args })
