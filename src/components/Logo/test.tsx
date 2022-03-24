import { render } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the colors correctly', () => {
    const { container } = render(<Logo />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
