import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { Button } from '../Button/Button';

type ModalType = 'delete';
const modalConfig: Record<ModalType, { title: string; body: string }> = {
  delete: {
    title: 'Delete this document?',
    body: 'Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.',
  },
};

const getModalConfigByType = (type: ModalType, docName: string) => {
  const { title, body } = modalConfig[type];

  return { title, body: body.replace('welcome.md', docName) };
};

interface ModalProps {
  modalOpen: boolean;
  onCloseModal: () => void;
  type: ModalType;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, onCloseModal, type }) => {
  const { body, title } = getModalConfigByType(type, 'jongok.md');

  return (
    <Transition appear show={modalOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={onCloseModal}>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-lg h-[218px] flex flex-col gap-4 transform overflow-hidden rounded-[4px] bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title as='h4' className='text-lg font-medium leading-6 text-gray-900'>
                  {title}
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='typography text-gray-500'>{body}</p>
                </div>

                <div className='mt-4'>
                  <Button fullWidth onClick={() => onCloseModal()} btnValue='Confirm & Delete' />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;

