import React from 'react'
import { Meta, Story } from '@storybook/react'
import { CoolThing, CoolThingProps } from '../../index'

// const props = (): CoolThingProps => ({
//   onClick: action('onClick'),
//   cursorAuto: boolean('cursorAuto', false),
// })
const meta: Meta = {
  title: 'CoolThing',
  component: CoolThing,
  argTypes: {
    children: {
      defaultValue: 'Cool',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<CoolThingProps> = args => <CoolThing {...args} />

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Coolio = Template.bind({})

Coolio.args = {}
