import { useState } from 'react';
import Drawer from '../ui/Drawer/Drawer';
import { Button } from '../ui/Button/Button';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen} title='My documents'>
      <Button buttonTitle='newDocument' fullWidth onClick={() => setIsOpen(!isOpen)}>
        Close
      </Button>
    </Drawer>
  );
};

