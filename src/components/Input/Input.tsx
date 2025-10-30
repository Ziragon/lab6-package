import React from 'react';
import styles from './Input.module.css';

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

const Input: React.FC<InputProps> = ({
                                         label,
                                         error,
                                         helperText,
                                         required = false,
                                         placeholder,
                                         value,
                                         onChange,
                                         type = 'text',
                                     }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    const inputId = label?.replace(/\s+/g, '-').toLowerCase();

    return (
        <div className={styles.container}>
            {label && (
                <label htmlFor={inputId} className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}
            <input
                id={inputId}
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={`${styles.input} ${error ? styles.error : ''}`}
                required={required}
            />
            {error && <div className={styles.errorText}>{error}</div>}
            {helperText && !error && (
                <div className={styles.helperText}>{helperText}</div>
            )}
        </div>
    );
};

export default Input;