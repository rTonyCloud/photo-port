// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

describe('Contact component render', () => {
    it('renders', () => {
      render(<Contact />);
    });

    it('renders', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
      })
    })
    
    
    it('renders', () => {
      const { getByTestId } = render(<Contact />)
      expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })
     
    it('renders', () => {
      const { getByTestId } = render(<Contact />)
      expect(getByTestId('button')).toHaveTextContent('Submit')
   })