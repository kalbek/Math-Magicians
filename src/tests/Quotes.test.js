import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Quotes from '../components/Quotes';

test('It should render correctly', () => {
  const tree = render(
    <BrowserRouter>
      <Quotes />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
