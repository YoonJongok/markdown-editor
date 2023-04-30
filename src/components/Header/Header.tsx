import React from 'react';
import { FlexBoxRow } from '../ui/FlexBoxRow/FlexBoxRow';
import { Button } from '../ui/Button/Button';
import { ReactComponent as DocumentIcon } from '../../assets/icons/icon-document.svg';

export const Header = () => {
  return (
    <header className='flex justify-between items-center pr-2 bg-black-2'>
      <FlexBoxRow intent={'flexStartCenter'} className='gap-4'>
        <Button buttonTitle='close' intent={'close'} onClick={() => console.log('hi')} />
        <FlexBoxRow intent={'flexStartCenter'} className='gap-4'>
          <DocumentIcon />
          <h5 className='text-white'>document.md</h5>
        </FlexBoxRow>
      </FlexBoxRow>
      <FlexBoxRow intent={'flexEndCenter'} className='py-2 gap-3'>
        <Button buttonTitle='delete' intent={'delete'} />
        <Button buttonTitle='save' intent={'save'} />
      </FlexBoxRow>
    </header>
  );
};
