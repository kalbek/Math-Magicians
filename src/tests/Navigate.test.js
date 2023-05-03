import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

test('It should render correctly', () => {
  const tree = render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
