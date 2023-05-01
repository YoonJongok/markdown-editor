import React, { useState } from 'react';
import FlexBoxColumn from '../ui/FlexBoxColumn';
import { cn } from '../../lib/utils';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <FlexBoxColumn className={cn('w-full  h-full min-h-screen dark:bg-black-900')}>
      <Sidebar {...{ isOpen: sideBarOpen, setIsOpen: setSideBarOpen }} />
      <Header setSideBarOpen={setSideBarOpen} setModalOpen={setModalOpen} />
      {children}
    </FlexBoxColumn>
  );
};

