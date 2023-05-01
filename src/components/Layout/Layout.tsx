import React from 'react';
import FlexBoxColumn from '../ui/FlexBoxColumn';
import { cn } from '../../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <FlexBoxColumn className={cn('w-full  h-full min-h-screen dark:bg-black-900')}>
      {children}
    </FlexBoxColumn>
  );
};

