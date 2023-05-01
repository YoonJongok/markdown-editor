import React, { useState } from 'react';
import { FlexBoxColumn } from '../../components/ui/FlexBoxColumn/FlexBoxColumn';
import { FlexBoxRow } from '../../components/ui/FlexBoxRow/FlexBoxRow';
import { Button } from '../../components/ui/Button/Button';
import Modal from '../../components/ui/Modal/Modal';

export const Home = () => {
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <FlexBoxColumn onClick={() => setIsPreview((prev) => !prev)} className='cursor-pointer'>
        <FlexBoxRow intent={'flexBetweenCenter'} className='bg-grey-1 py-3 px-4'>
          <h6 className='uppercase text-grey-4'>{isPreview ? 'preview' : 'markdown'}</h6>
          <Button
            buttonTitle={isPreview ? 'hidePreview' : 'showPreview'}
            intent={isPreview ? 'hidePreview' : 'showPreview'}
            className='p-0'
          />
        </FlexBoxRow>
      </FlexBoxColumn>
      <div className={`${modalOpen ? 'absolute inset-0  z-40 bg-gray-950 opacity-70' : ''}`}>
        {modalOpen && <Modal modalOpen={modalOpen} onCloseModal={handleCloseModal} type='delete' />}
      </div>
    </>
  );
};

