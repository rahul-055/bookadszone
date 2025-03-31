import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../../components/atoms/button/Button';

describe('Button Component', () => {
  test('renders the button with correct text', () => {
    render(<Button text="Add Item" type="button" />);
    expect(screen.getByText('Add Item')).toBeInTheDocument();
  });

  test('applies additional className', () => {
    render(<Button text="Click Me" type="button" className="custom-class" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('common-btn custom-class');
  });

  test('calls onClick when button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click Me" type="button" onClick={handleClick} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders the button with correct type attribute', () => {
    render(<Button text="Submit" type="submit" />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('renders button', () => {
    render(<button>button</button>);
    expect(screen.getByText('button')).toBeInTheDocument(); 
  });
  
});
