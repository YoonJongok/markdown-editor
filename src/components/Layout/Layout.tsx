import React, { useState } from 'react';
import FlexBoxColumn from '../ui/FlexBoxColumn';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FlexBoxColumn className='w-full  h-full min-h-screen dark:bg-black-900'>
      <Header setIsOpen={setIsOpen} />
      <Sidebar {...{ isOpen, setIsOpen }} />
      {children}
    </FlexBoxColumn>
  );
};

