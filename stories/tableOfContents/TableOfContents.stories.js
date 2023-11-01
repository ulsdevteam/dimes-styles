import TableOfContents from './tableOfContents.handlebars'

export default {
  component: TableOfContents,
  title: "Components/Table of Contents",
  args:{
    ariaLabel: 'table of contents',
    listItems: listItems
  }
};

export const neutral = (args) => TableOfContents({ class: 'toc--neutral', ...args })

export const blue = (args) => TableOfContents({ class: 'toc--blue', ...args })

export const orange = (args) => TableOfContents({ class: 'toc--orange', ...args })

export const withTitle = (args) => TableOfContents({ class: 'toc--neutral', title: 'Digital Preservation Policy', ...args })
