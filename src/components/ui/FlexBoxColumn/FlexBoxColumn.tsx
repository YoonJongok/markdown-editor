import { type VariantProps, cva } from 'class-variance-authority';
import React, { FC, ReactNode } from 'react';

const flexBoxColumn = cva(['flex ', 'flex-col'], {
  variants: {
    intent: {},
    modifier: {},
    fullWidth: {
      true: ['w-full'],
    },
    defaultVariants: {},
  },
});

export interface FlexBoxColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexBoxColumn> {
  children: ReactNode;
}

export const FlexBoxColumn: FC<FlexBoxColumnProps> = ({
  className,
  intent,
  modifier,
  children,
  fullWidth,
  ...props
}) => {
  return (
    <div {...props} className={flexBoxColumn({ intent, className, modifier, fullWidth })}>
      {children}
    </div>
  );
};

