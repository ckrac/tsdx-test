import React from 'react'
import * as ReactDOM from 'react-dom'
import { Coolio } from '../src/components/CoolThing/CoolThing.stories'

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Coolio />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
