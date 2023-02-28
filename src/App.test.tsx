import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import '@testing-library/jest-dom';
// this is added in setupTests.ts by CRA
describe('<App />', () => {
  test('Loads app', ()=> {
    render(<App/>)
  })
  test('has Stockholm', () => {
    // act
    render(<App />)
    expect(screen.getByText(/Stockholm/)).toBeVisible()
  });
})