import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { ReactComponent as SaveIcon } from '../../../assets/icons/icon-save.svg';
import { ReactComponent as PlusIcon } from '../../../assets/icons/icon-plus.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/icon-close.svg';
import { ReactComponent as MenuIcon } from '../../../assets/icons/icon-menu.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/icon-delete.svg';

type BtnTitle = 'newDocument' | 'saveChanges' | 'close' | 'delete' | 'menu' | 'save';
type BtnType = {
  text?: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const ButtonType: Record<BtnTitle, BtnType> = {
  newDocument: { text: 'New Document', Icon: PlusIcon },
  saveChanges: { text: 'Save Changes', Icon: SaveIcon },
  save: { Icon: SaveIcon },
  close: { Icon: CloseIcon },
  menu: { Icon: MenuIcon },
  delete: { Icon: DeleteIcon },
};

const button = cva(
  ['flex', 'justify-center', 'items-center', 'gap-2', 'rounded-[4px]', 'capitalize', 'text-[15px]'],
  {
    variants: {
      intent: {
        default: [
          'bg-coral-2',
          'text-white',
          'border-transparent',
          'hover:bg-coral-1',
          'min-w-[202px]',
          'px-4',
          'py-3',
        ],
        close: ['bg-black-1'],
        delete: ['bg-transparent', 'hover:bg-black-1'],
        menu: ['bg-black-1'],
        save: ['bg-coral-2', 'hover:bg-coral-1'],
      },
      size: {},
      fullWidth: {
        true: ['w-full'],
      },
    },
    defaultVariants: {
      intent: 'default',
    },
    compoundVariants: [
      {
        intent: 'close',
        className: 'w-14 h-14',
      },
      {
        intent: ['delete', 'save'],
        className: 'p-3',
      },
    ],
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  buttonTitle: BtnTitle;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  fullWidth,
  buttonTitle,
  ...props
}) => {
  const { Icon, text } = ButtonType[buttonTitle];
  return (
    <button className={button({ intent, size, fullWidth, className })} {...props}>
      <Icon width={16} height={16} /> {text && text}
    </button>
  );
};

