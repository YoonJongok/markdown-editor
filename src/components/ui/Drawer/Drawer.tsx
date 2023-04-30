import { Dialog } from '@headlessui/react';
import { FlexBoxColumn } from '../FlexBoxColumn/FlexBoxColumn';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as MoonIcon } from '../../../assets/icons/icon-dark-mode.svg';
import { ReactComponent as SunIcon } from '../../../assets/icons/icon-light-mode.svg';
import { FlexBoxRow } from '../FlexBoxRow/FlexBoxRow';
import { DarkModeSwitch } from '../../DarkModeSwitch/DarkModeSwitch';
import { useState } from 'react';
import { Button } from '../Button/Button';

type DrawerProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const Drawer = ({ title, children, isOpen, setIsOpen }: DrawerProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <Dialog
      unmount={false}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='fixed w-full max-w-[250px] flex flex-col gap-[27px] px-6 py-[28px] z-10 inset-0 overflow-y-auto bg-black-3'
    >
      <FlexBoxRow intent={'flexBetweenCenter'} className=''>
        <Logo />
        <Button
          buttonTitle='close'
          intent={'close'}
          className='absolute right-0 top-0 z-40'
          onClick={() => setIsOpen(false)}
        />
      </FlexBoxRow>

      <Dialog.Overlay className='z-30 fixed inset-0 bg-black bg-opacity-30' />
      <FlexBoxColumn
        fullWidth
        className={`z-30 justify-between
                         max-w-sm h-screen  overflow-hidden text-left align-middle
                         shadow-xl`}
      >
        <FlexBoxColumn fullWidth className='gap-[26px]'>
          <Dialog.Title className='font-bold md:text-4xl text-grey-4 typography'>
            {title}
          </Dialog.Title>
          {children}
        </FlexBoxColumn>
        <FlexBoxRow fullWidth intent={'flexStartCenter'} className='gap-[10px]'>
          <MoonIcon fill={isDarkMode ? 'white' : '#5A6069'} />
          <DarkModeSwitch
            isDarkMode={isDarkMode}
            toggleTheme={() => setIsDarkMode((prev) => !prev)}
          />
          <SunIcon fill={!isDarkMode ? 'white' : '#5A6069'} />
        </FlexBoxRow>
      </FlexBoxColumn>
    </Dialog>
  );
};

