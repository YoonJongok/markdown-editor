import { Dialog } from '@headlessui/react';
import { Button } from '../Button/Button';

type DrawerProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Drawer({ title, children, isOpen, setIsOpen }: DrawerProps) {
  return (
    <Dialog
      unmount={false}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='fixed w-full max-w-[250px] z-30 inset-0 overflow-y-auto bg-black-3'
    >
      <div className='flex h-screen'>
        <Dialog.Overlay className='z-40 fixed inset-0 bg-black bg-opacity-30' />
        <div
          className={`z-50 flex flex-col justify-between  w-full
                         max-w-sm p-6 overflow-hidden text-left align-middle
                         shadow-xl`}
        >
          <div>
            <Dialog.Title className='font-bold md:text-4xl text-grey-4 typography'>
              {title}
            </Dialog.Title>
            {children}
          </div>
          <div className='self-center mt-10'>
            <Button buttonTitle='newDocument' onClick={() => setIsOpen(!isOpen)}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

