import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
    describe('Rendering', () => {
        it('рендерит кнопку с children и дефолтными пропсами', () => {
            render(<Button variant="primary" size="md" onClick={() => {}}>Click Me</Button>);
            const button = screen.getByRole('button', { name: /Click Me/i });
            expect(button).toBeInTheDocument();
            expect(button).toHaveTextContent('Click Me');
            expect(button).toHaveAttribute('type', 'button');
        });

        it('применяет правильный variant класс (primary)', () => {
            render(<Button variant="primary" size="md" onClick={() => {}}>Primary</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveClass('primary');
        });

        it('применяет правильный variant класс (secondary)', () => {
            render(<Button variant="secondary" size="md" onClick={() => {}}>Secondary</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveClass('secondary');
        });

        it('применяет правильный variant класс (danger)', () => {
            render(<Button variant="danger" size="md" onClick={() => {}}>Danger</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveClass('danger');
        });

        it('применяет правильный size класс (sm)', () => {
            render(<Button variant="primary" size="sm" onClick={() => {}}>Small</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveClass('sm');
        });

        it('применяет правильный size класс (md)', () => {
            render(<Button variant="primary" size="md" onClick={() => {}}>Medium</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveClass('md');
        });

        it('применяет правильный size класс (lg)', () => {
            render(<Button variant="primary" size="lg" onClick={() => {}}>Large</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveClass('lg');
        });

        it('применяет правильный type (submit)', () => {
            render(<Button variant="primary" size="md" onClick={() => {}} type="submit">Submit</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveAttribute('type', 'submit');
        });

        it('применяет правильный type (reset)', () => {
            render(<Button variant="primary" size="md" onClick={() => {}} type="reset">Reset</Button>);
            const button = screen.getByRole('button');
            expect(button).toHaveAttribute('type', 'reset');
        });
    });

    describe('Interactions', () => {
        it('вызывает onClick при клике', () => {
            const handleClick = jest.fn();
            render(<Button variant="primary" size="md" onClick={handleClick}>Click Me</Button>);
            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(handleClick).toHaveBeenCalledTimes(1);
        });

        it('не вызывает onClick, если кнопка disabled', () => {
            const handleClick = jest.fn();
            render(<Button variant="primary" size="md" onClick={handleClick} disabled>Disabled</Button>);
            const button = screen.getByRole('button');
            fireEvent.click(button);
            expect(handleClick).not.toHaveBeenCalled();
        });

        it('симулирует hover и проверяет отсутствие ошибок', () => {
            render(<Button variant="primary" size="md" onClick={() => {}}>Hover Me</Button>);
            const button = screen.getByRole('button');
            userEvent.hover(button);
            expect(button).toBeInTheDocument();
        });
    });

    describe('Accessibility', () => {
        it('имеет правильный role и доступен для экранных читалок', () => {
            render(<Button variant="primary" size="md" onClick={() => {}}>Accessible</Button>);
            const button = screen.getByRole('button', { name: /Accessible/i });
            expect(button).toBeVisible();
        });
    });
});