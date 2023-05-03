import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Nav component', () => {
  test('rendering the nav links', () => {
    render(
      <BrowserRouter>
        <Navigation />
        <Home />
      </BrowserRouter>,
    );
    const calculatorLink = screen.getByRole('link', { name: /calculator/i });
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(calculatorLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });
  test('It should render correctly', () => {
    const tree = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
