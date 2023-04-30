import React from 'react';
import Drawer from '../ui/Drawer';
import { Button } from '../ui/Button/Button';
import { FlexBoxRow } from '../ui/FlexBoxRow/FlexBoxRow';
import { ReactComponent as DocumentIcon } from '../../assets/icons/icon-document.svg';
import { FlexBoxColumn } from '../ui/FlexBoxColumn/FlexBoxColumn';
import { MarkdownData } from '../../App';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  documentList: MarkdownData[];
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, documentList }) => {
  return (
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen} title='My documents'>
      <Button buttonTitle='newDocument' fullWidth onClick={() => setIsOpen((prev) => !prev)} />
      {documentList.map((document) => (
        <FlexBoxRow key={crypto.randomUUID()} intent={'flexStartCenter'} className='gap-4'>
          <DocumentIcon />
          <FlexBoxColumn className='items-start'>
            <h5 className='text-grey-4 font-thin'>{document.createdAt}</h5>
            <h5 className='text-white font-light'>{document.name}</h5>
          </FlexBoxColumn>
        </FlexBoxRow>
      ))}
    </Drawer>
  );
};

