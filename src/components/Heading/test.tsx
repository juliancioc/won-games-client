import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({ 
      color: '#FAFAFA' 
    })
  })

  it('should render a black heading when is passed', () => {
    renderWithTheme(<Heading color='black'>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({ 
      color: '#030517' 
    })
  })
})
