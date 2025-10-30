import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input Component', () => {
    // Тесты на рендеринг
    describe('Rendering', () => {
        it('рендерит инпут без лейбла и с плейсхолдером', () => {
            render(<Input placeholder="Введите текст" value="" onChange={() => {}} />);
            const input = screen.getByPlaceholderText('Введите текст');
            expect(input).toBeInTheDocument();
            expect(input).toHaveAttribute('type', 'text');
        });

        it('рендерит лейбл, если label задан', () => {
            render(<Input label="Имя" value="" onChange={() => {}} />);
            const label = screen.getByText('Имя');
            expect(label).toBeInTheDocument();
            const input = screen.getByLabelText('Имя');
            expect(input).toBeInTheDocument();
        });

        it('показывает required-звездочку, если required=true', () => {
            render(<Input label="Поле" required value="" onChange={() => {}} />);
            const required = screen.getByText('*');
            expect(required).toHaveClass('required');
            const input = screen.getByLabelText(/Поле/);
            expect(input).toBeRequired();
        });

        it('показывает ошибку, если error задан', () => {
            render(<Input error="Неверный ввод" value="" onChange={() => {}} />);
            const errorText = screen.getByText('Неверный ввод');
            expect(errorText).toBeInTheDocument();
            expect(errorText).toHaveClass('errorText');
            const input = screen.getByRole('textbox');
            expect(input).toHaveClass('error');
        });

        it('показывает helperText, если helperText задан и нет ошибки', () => {
            render(<Input helperText="Подсказка" value="" onChange={() => {}} />);
            const helper = screen.getByText('Подсказка');
            expect(helper).toBeInTheDocument();
            expect(helper).toHaveClass('helperText');
        });

        it('не показывает helperText, если есть error', () => {
            render(<Input helperText="Подсказка" error="Ошибка" value="" onChange={() => {}} />);
            expect(screen.queryByText('Подсказка')).not.toBeInTheDocument();
        });

        it('применяет правильный type (email)', () => {
            render(<Input type="email" value="" onChange={() => {}} />);
            const input = screen.getByRole('textbox');
            expect(input).toHaveAttribute('type', 'email');
        });
    });

    describe('Interactions', () => {
        it('вызывает onChange при вводе текста', () => {
            const handleChange = jest.fn();
            render(<Input value="" onChange={handleChange} />);
            const input = screen.getByRole('textbox');
            fireEvent.change(input, { target: { value: 'test' } });
            expect(handleChange).toHaveBeenCalledWith('test');
        });
    });

    describe('Accessibility', () => {
        it('имеет правильный id и htmlFor для лейбла', () => {
            render(<Input label="Email" value="" onChange={() => {}} />);
            const input = screen.getByLabelText('Email');
            expect(input).toHaveAttribute('id', 'email');
        });

        it('является required, если required=true', () => {
            render(<Input required value="" onChange={() => {}} />);
            const input = screen.getByRole('textbox');
            expect(input).toBeRequired();
        });
    });
});