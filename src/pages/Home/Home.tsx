import { useEffect, useState } from 'react';
import { FlexBoxColumn } from '../../components/ui/FlexBoxColumn/FlexBoxColumn';
import { FlexBoxRow } from '../../components/ui/FlexBoxRow/FlexBoxRow';
import { Button } from '../../components/ui/Button/Button';
import Modal from '../../components/ui/Modal/Modal';
import Layout from '../../components/Layout';
import { DocumentDetail } from '../DocumentDetail/DocumentDetail';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';
import { useAtom } from 'jotai';
import { fetchMarkdownDocumentsAtom } from '../../store/jotai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const Home = () => {
  const [documents, fetchDocuments] = useAtom(fetchMarkdownDocumentsAtom);

  const [loading, setLoading] = useState(true);
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (loading) {
      fetchDocuments();
      setLoading(false);
    }
  }, [fetchDocuments, loading, setLoading]);

  const markdown = `${documents[1]?.content}`;

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
            className='p-0'
          />
        </FlexBoxRow>
      </FlexBoxColumn>
      {isPreview ? (
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      ) : (
        <DocumentDetail document={documents[1]} />
      )}
      <div className={`${modalOpen ? 'absolute inset-0  z-40 bg-gray-950 opacity-70' : ''}`}>
        {modalOpen && <Modal modalOpen={modalOpen} onCloseModal={handleCloseModal} type='delete' />}
      </div>
    </Layout>
  );
};

