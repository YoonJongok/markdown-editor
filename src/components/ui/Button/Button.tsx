import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { ReactComponent as SaveIcon } from '../../../assets/icons/icon-save.svg';
import { ReactComponent as PlusIcon } from '../../../assets/icons/icon-plus.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/icon-close.svg';
import { ReactComponent as MenuIcon } from '../../../assets/icons/icon-menu.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/icon-delete.svg';
import { ReactComponent as PreviewIcon } from '../../../assets/icons/icon-show-preview.svg';
import { ReactComponent as HidePreviewIcon } from '../../../assets/icons/icon-hide-preview.svg';
import { cn } from '../../../lib/utils';

type BtnTitle =
  | 'newDocument'
  | 'close'
  | 'delete'
  | 'menu'
  | 'save'
  | 'showPreview'
  | 'hidePreview';
type BtnType = {
  text?: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const ButtonType: Record<BtnTitle, BtnType> = {
  save: { Icon: SaveIcon },
  close: { Icon: CloseIcon },
  menu: { Icon: MenuIcon },
  delete: { Icon: DeleteIcon },
  showPreview: { Icon: PreviewIcon },
  hidePreview: { Icon: HidePreviewIcon },
  newDocument: {
    text: 'New Document',
    Icon: PlusIcon,
  },
};

const button = cva(
  [
    'flex',
    'justify-center',
    'items-center',
    'gap-2',
    'rounded-[4px]',
    'capitalize',
    'text-[15px]',
    'border-transparent',
  ],
  {
    variants: {
      intent: {
        default: [
          'bg-coral-2',
          'text-white',
          'border-transparent',
          'hover:bg-coral-1',
          'px-4',
          'py-3',
        ],
        close: ['bg-black-1'],
        delete: ['bg-transparent', 'hover:bg-black-1', 'p-[9px]'],
        menu: ['bg-black-1'],
        save: ['bg-coral-2', 'hover:bg-coral-1', 'w-10'],
        showPreview: [],
        hidePreview: [],
      },
      size: {
        medium: ['p-5'],
      },
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
        intent: ['save'],
        className: 'p-3',
      },
      { intent: 'menu', className: 'px-5 py-6' },
      { intent: ['showPreview', 'hidePreview'], className: 'tracking-widest' },
    ],
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  buttonTitle?: BtnTitle;
  btnValue?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  fullWidth,
  buttonTitle,
  btnValue,
  ...props
}) => {
  const btnConfig = buttonTitle && ButtonType[buttonTitle];

  return (
    <>
      {btnConfig && (
        <button className={cn(button({ intent, size, fullWidth, className }))} {...props}>
          <btnConfig.Icon />
          {btnConfig?.text}
        </button>
      )}
      {btnValue && (
        <button className={cn(button({ intent, size, fullWidth, className }))} {...props}>
          {btnValue}
        </button>
      )}
    </>
  );
};

