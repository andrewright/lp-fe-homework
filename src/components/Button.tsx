import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({className, children}) => (
    <button data-testid='fetch-button'
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}>{children}</button>
);
