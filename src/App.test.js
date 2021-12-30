import { render, screen } from '@testing-library/react';
import App from './App';

describe('Example Hook Testing',()=>{
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Example without Hooks/i);
    expect(linkElement).toBeInTheDocument();
  });  
});
