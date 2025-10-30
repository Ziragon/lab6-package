import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Кнопка с вариантами стилей, размерами и состоянием disabled. Поддерживает типы button/submit/reset.',
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger'],
            description: 'Вариант стиля кнопки',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Размер кнопки',
        },
        disabled: {
            control: 'boolean',
            description: 'Состояние disabled',
        },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
            description: 'Тип кнопки',
        },
        onClick: { action: 'clicked' },
        children: {
            control: 'text',
            description: 'Содержимое кнопки',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Primary Button',
        onClick: action('onClick'),
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'md',
        children: 'Secondary Button',
        onClick: action('onClick'),
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        size: 'md',
        children: 'Danger Button',
        onClick: action('onClick'),
    },
};

export const Disabled: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Disabled Button',
        disabled: true,
        onClick: action('onClick'),
    },
};

export const Small: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Small Button',
        onClick: action('onClick'),
    },
};

export const Large: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        children: 'Large Button',
        onClick: action('onClick'),
    },
};