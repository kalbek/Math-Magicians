import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

test('It should render correctly', () => {
  const tree = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
