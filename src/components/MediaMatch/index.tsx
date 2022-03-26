import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const mediaMatcModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)` display: block; `}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)` display: block; `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatcModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatcModifiers.greaterThan(greaterThan)}
  `}
`
