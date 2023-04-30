import React from 'react';
import Drawer from '../ui/Drawer';
import { Button } from '../ui/Button/Button';
import { FlexBoxRow } from '../ui/FlexBoxRow/FlexBoxRow';
import { ReactComponent as DocumentIcon } from '../../assets/icons/icon-document.svg';
import { Link } from 'react-router-dom';
import { MarkdownData } from '../../pages/Home/Home';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  documentList: MarkdownData[];
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, documentList }) => {
  return (
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen} title='My documents'>
      <Button btnValue='+ New Document' fullWidth onClick={() => setIsOpen((prev) => !prev)} />
      {documentList.map((document) => (
        <FlexBoxRow key={crypto.randomUUID()} intent={'flexStartCenter'} className='gap-4'>
          <DocumentIcon />
          <Link to={`/${document.name}`} className='flex flex-col items-start'>
            <h5 className='text-grey-4 font-thin'>{document.createdAt}</h5>
            <h5 className='text-white font-light'>{document.name}</h5>
          </Link>
        </FlexBoxRow>
      ))}
    </Drawer>
  );
};

