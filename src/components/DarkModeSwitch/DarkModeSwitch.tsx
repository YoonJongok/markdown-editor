import { Switch } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import { cn } from '../../lib/utils';

interface DarkModeSwitchProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <Switch
      checked={isDarkMode}
      onChange={toggleTheme}
      className={clsx(
        'cursur-pointer relative inline-flex px-[2px] items-center h-[22px] w-[42px] shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75',
        {
          'bg-accent': isDarkMode,
          'bg-input': !isDarkMode,
        }
      )}
    >
      <span
        className={clsx(
          'cursur-pointer inline-block h-[14px] w-[14px] transform rounded-full bg-blue-600 shadow-lg ring-0 transition duration-200 ease-in-out',
          {
            'translate-x-5': isDarkMode,
            'translate-x-0': !isDarkMode,
          }
        )}
      />
    </Switch>
  );
};

