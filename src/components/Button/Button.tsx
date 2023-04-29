import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { ReactComponent as SaveIcon } from '../../assets/icons/icon-save.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/icon-plus.svg';

type BtnTitle = 'newDocument' | 'saveChanges';
type BtnType = {
  text: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const ButtonType: Record<BtnTitle, BtnType> = {
  newDocument: { text: 'New Document', Icon: PlusIcon },
  saveChanges: { text: 'Save Changes', Icon: SaveIcon },
};

const button = cva(
  ['flex', 'justify-center', 'items-center', 'gap-2', 'rounded-[4px]', 'capitalize'],
  {
    variants: {
      intent: {
        primary: ['bg-coral-2', 'text-white', 'border-transparent', 'hover:bg-coral-1'],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-3', 'px-4'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
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
  buttonTitle,
  ...props
}) => {
  const { Icon, text } = ButtonType[buttonTitle];
  return (
    <button className={button({ intent, size, className })} {...props}>
      <Icon width={16} height={16} /> {text}
    </button>
  );
};

