import React from 'react';
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
export default Input;
