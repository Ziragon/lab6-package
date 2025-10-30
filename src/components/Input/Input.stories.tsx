import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import Input from './Input';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Поле ввода с лейблом, ошибкой, хелпером и валидацией. Поддерживает типы text/password/email.',
            },
        },
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Лейбл поля',
        },
        error: {
            control: 'text',
            description: 'Текст ошибки',
        },
        helperText: {
            control: 'text',
            description: 'Хелпер-текст',
        },
        required: {
            control: 'boolean',
            description: 'Обязательное поле',
        },
        placeholder: {
            control: 'text',
            description: 'Плейсхолдер',
        },
        value: {
            control: 'text',
            description: 'Значение поля',
        },
        type: {
            control: 'select',
            options: ['text', 'password', 'email'],
            description: 'Тип инпута',
        },
        onChange: { action: 'changed' },
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: 'Имя',
        placeholder: 'Введите имя',
        value: '',
        onChange: action('onChange'),
    },
};

export const WithError: Story = {
    args: {
        label: 'Email',
        error: 'Неверный email',
        value: 'invalid',
        onChange: action('onChange'),
    },
};

export const WithHelper: Story = {
    args: {
        label: 'Пароль',
        helperText: 'Минимум 8 символов',
        type: 'password',
        value: '',
        onChange: action('onChange'),
    },
};

export const Required: Story = {
    args: {
        label: 'Телефон',
        required: true,
        placeholder: '+7 (XXX) XXX-XX-XX',
        value: '',
        onChange: action('onChange'),
    },
};