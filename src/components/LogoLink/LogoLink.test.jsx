import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme'
import { LogoLink } from '.'

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello World" />);
    const heading = screen.getByRole('heading', { name: 'Hello World' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  })

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello World" srcImg='image.jpg'/>);
    expect(screen.getByAltText('Hello World')).toHaveAttribute('src', 'image.jpg');
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Hello World" srcImg='image.jpg'/>);
    expect(container).toMatchSnapshot()
  })
})