import { Header } from './components/Header/Header';
import Layout from './components/Layout';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Button } from './components/ui/Button/Button';
import { FlexBoxColumn } from './components/ui/FlexBoxColumn/FlexBoxColumn';
import { FlexBoxRow } from './components/ui/FlexBoxRow/FlexBoxRow';
import { useState } from 'react';
import Modal from './components/ui/Modal/Modal';

function App() {
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleDeleteBtnClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Layout>
      <Sidebar {...{ isOpen: sideBarOpen, setIsOpen: setSideBarOpen }} />
      <Header setSideBarOpen={setSideBarOpen} setModalOpen={setModalOpen} />
      <FlexBoxColumn onClick={() => setIsPreview((prev) => !prev)} className='cursor-pointer'>
        <FlexBoxRow intent={'flexBetweenCenter'} className='bg-grey-1 py-3 px-4'>
          <h6 className='uppercase text-grey-4'>{isPreview ? 'preview' : 'markdown'}</h6>
          <Button
            buttonTitle={isPreview ? 'hidePreview' : 'showPreview'}
            intent={isPreview ? 'hidePreview' : 'showPreview'}
          />
        </FlexBoxRow>
      </FlexBoxColumn>
      <div className={`${modalOpen ? 'absolute inset-0  z-40 bg-gray-950 opacity-70' : ''}`}>
        {modalOpen && <Modal modalOpen={modalOpen} onCloseModal={handleCloseModal} type='delete' />}
      </div>
    </Layout>
  );
}

export default App;

