// vendors
import { css } from '@emotion/core';

const lessThen = (breakpoint) => (...args) => css`
    @media (max-width: ${breakpoint - 0.02}px) {
      ${css(...args)}
    }
  `;

const between = (firstBreakpoint, secondBreakpoint) => (...args) => css`
    @media (
      min-width: ${firstBreakpoint}px and
      max-width: ${secondBreakpoint - 0.02}px
    ) {
      ${css(...args)}
    }
  `;

const greaterThen = (breakpoint) => (...args) => css`
    @media (min-width: ${breakpoint}px) {
      ${css(...args)}
    }
  `;

export default {
  lessThen,
  between,
  greaterThen,
};
