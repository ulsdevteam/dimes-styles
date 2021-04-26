import TableOfContents from './tableOfContents.handlebars'

export default {
  title: 'Components/Table of Contents',
  component: TableOfContents,
  args: {
    ariaLabel: 'table of contents',
    listItems: [
      { text: 'Purpose', active: true },
      { text: 'Objectives', active: false },
      { text: 'Mandate', active: false },
      { text: 'Scope', active: false },
      { text: 'Challenges', active: false },
      { text: 'Principles', active: false }
    ]
  }
}

export const Colors = (args) => {
  const colors = ['toc--neutral', 'toc--blue', 'toc--orange']
  const tocs = colors.map(c => TableOfContents({ class: c, ...args })).join('')
  return tocs
}

export const WithTitle = (args) => TableOfContents({ class: 'toc--neutral', title: 'Digital Preservation Policy', ...args })
