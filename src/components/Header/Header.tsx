import React from 'react';
import { FlexBoxRow } from '../ui/FlexBoxRow/FlexBoxRow';
import { Button } from '../ui/Button/Button';
import { ReactComponent as DocumentIcon } from '../../assets/icons/icon-document.svg';

interface HeaderProps {
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({ setSideBarOpen, setModalOpen }) => {
  return (
    <header className='flex justify-between items-center pr-2 bg-black-2'>
      <FlexBoxRow intent={'flexStartCenter'} className='gap-4'>
        <Button
          buttonTitle='menu'
          intent={'menu'}
          onClick={() => setSideBarOpen((prev) => !prev)}
        />

        <FlexBoxRow intent={'flexStartCenter'} className='gap-4'>
          <DocumentIcon />
          <h5 className='text-white'>document.md</h5>
        </FlexBoxRow>
      </FlexBoxRow>
      <FlexBoxRow intent={'flexEndCenter'} className='py-2 gap-3'>
        <Button buttonTitle='delete' intent={'delete'} onClick={() => setModalOpen(true)} />
        <Button buttonTitle='save' intent={'save'} />
      </FlexBoxRow>
    </header>
  );
};

