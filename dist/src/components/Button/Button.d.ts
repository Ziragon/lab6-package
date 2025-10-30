import React from 'react';
interface ButtonProps {
    variant: 'primary' | 'secondary' | 'danger';
    size: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    onClick: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
