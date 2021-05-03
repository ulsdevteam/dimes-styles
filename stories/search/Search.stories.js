import Search from './search.handlebars'

export const basic = () => Search({
  hideLabel: false,
  controlsBlock: false,
  controlsInline: false,
  button: true
})

export const noButton = () => Search({
  hideLabel: false,
  controlsBlock: false,
  controlsInline: false,
  button: false
})

export const noLabel = () => Search({
  hideLabel: true,
  controlsBlock: false,
  controlsInline: false,
  button: true
})

export const withBlockControls = () => Search({
  hideLabel: false,
  controlsBlock: true,
  controlsInline: false,
  button: true
})

export const withInlineControls = () => Search({
  hideLabel: false,
  controlsBlock: false,
  controlsInline: true,
  button: true
})
