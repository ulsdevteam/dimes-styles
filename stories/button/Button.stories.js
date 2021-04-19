import { storiesOf } from '@storybook/html'

import '../../dist/main.min.css'

import Button from './button.handlebars'
import buttonData from './button.json'

storiesOf('Buttons', module)
  .add('Button', () => {
    return Button(buttonData)
  })
