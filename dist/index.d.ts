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

interface InputProps {
    label?: string;
    error?: string;
    helperText?: string;
    required?: boolean;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    type?: 'text' | 'password' | 'email';
}
declare const Input: React.FC<InputProps>;

export { Button, Input };
