import { storiesOf } from '@storybook/html'

import '../../dist/main.min.css'

import Primary from './primary.html'
import IconAfter from './iconAfter.html'
import IconBefore from './iconBefore.html'
storiesOf('Buttons', module)
  .add('Primary button', () => Primary, {})
  .add('Leading icon', () => IconBefore, {})
  .add('Trailing icon', () => IconAfter, {})
