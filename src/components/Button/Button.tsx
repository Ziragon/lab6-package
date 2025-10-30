import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    variant: 'primary' | 'secondary' | 'danger';
    size: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    onClick: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
                                           variant,
                                           size,
                                           disabled = false,
                                           onClick,
                                           children,
                                           type = 'button',
                                       }) => {
    const className = `${styles.button} ${styles[variant]} ${styles[size]}`;

    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;