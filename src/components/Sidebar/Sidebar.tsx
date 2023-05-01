import React from 'react';
import Drawer from '../ui/Drawer';
import { Button } from '../ui/Button/Button';
import { ReactComponent as DocumentIcon } from '../../assets/icons/icon-document.svg';
import { Link } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { documentsAtom } from '../../store/jotai';
import { FlexBoxColumn } from '../ui/FlexBoxColumn/FlexBoxColumn';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const documents = useAtomValue(documentsAtom);

  return (
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen} title='My documents'>
      <Button btnValue='+ New Document' fullWidth onClick={() => setIsOpen(false)} />
      {documents.map((document) => (
        <Link
          key={crypto.randomUUID()}
          to={`/${document.name}`}
          onClick={() => setIsOpen(false)}
          className='flex justify-start items-center gap-4 rounded-sm hover:bg-black-1'
        >
          <DocumentIcon />
          <FlexBoxColumn className='items-start'>
            <h5 className='text-grey-4 font-thin'>{document.createdAt}</h5>
            <h5 className='text-white font-light'>{document.name}</h5>
          </FlexBoxColumn>
        </Link>
      ))}
    </Drawer>
  );
};

