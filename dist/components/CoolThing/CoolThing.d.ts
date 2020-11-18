import React, { FC } from 'react';
export interface CoolThingProps extends Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onClick'> {
    className?: string;
    color?: string;
}
declare const CoolThing: FC<CoolThingProps>;
export default CoolThing;
