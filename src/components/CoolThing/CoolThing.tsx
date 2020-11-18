import React, { FC } from 'react'
import cn from 'classnames'

export interface CoolThingProps
  extends Pick<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'onClick'
  > {
  className?: string
  color?: string
}

const CoolThing: FC<CoolThingProps> = ({
  className,
  color,
  children,
  onClick,
}) => {
  return (
    <div
      className={cn('cool-thing', className)}
      style={{ ...(color && { color }) }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default CoolThing
