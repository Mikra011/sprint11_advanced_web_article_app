// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Spinner from './Spinner'

test('sanity', () => {
  expect(true).toBe(true)
})

test('renders spinner when "on" is true', () => {
  render(<Spinner on={true} />)
  const spinnerElement = screen.getByText(/Please wait.../i)
  expect(spinnerElement).toBeInTheDocument()
})

test('does not render spinner when "on" is false', () => {
  render(<Spinner on={false} />)
  const spinnerElement = screen.queryByText(/Please wait.../i)
  expect(spinnerElement).not.toBeInTheDocument()
})

