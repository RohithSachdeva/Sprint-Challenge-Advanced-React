import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { getbyTestId, fireEvent } from '@testing-library/dom'
import Players from './components/Players'
import Navbar from './components/Navbar'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders navbar and checks for DarkMode text', () => {
  const { getByText } = render(<Navbar/>);
  const navbar = getByText(/DarkMode/i);
  expect(navbar).toBeInTheDocument();
})

// test('Clicks DarkMode and checks for background change', () => {
//   const { getByText, getByTestId } = render(<Navbar/>);
//   fireEvent.click(getByText(/Click for DarkMode/i));
//   const navBarTest = getByTestId("navtest");
//   expect(navBarTest).toHaveStyle('background-color: #313843');
// })

test('Renders Navbar via TestID', () => {
  const { getByTestId } = render(<Navbar/>);
  const navtest2 = getByTestId('navtest');
  expect(navtest2).toBeInTheDocument();
})

test('Renders title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/World Cup/i)
  expect(title).toBeInTheDocument();
})


