import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';

test('It should render correctly', () => {
  const tree = render(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
