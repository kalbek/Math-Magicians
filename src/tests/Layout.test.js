import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

test('It should render correctly', () => {
  const tree = render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
