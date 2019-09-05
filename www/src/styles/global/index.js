// vendors
import { css } from '@emotion/core';

// style varaibles
import { colors, fonts } from '../variables';

export default css`
  :root {
    --font-size: 100%;
    --line-height: 1.15;
  }

  html {
    font-size: var(--font-size);
    line-height: var(--line-height);
    scroll-behavior: smooth;
    background-color: ${colors.background};
  }

  body {
    font-family: ${fonts.body};
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Rythme background */
    /* background-image: linear-gradient(#eee 1px, transparent 1px);
    background-size: 100% calc(var(--line-height) * 1rem);
    background-position-y: calc(-0.5rem + 1px); */
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-rendering: optimizeLegibility;
    margin: 0;
    text-transform: uppercase;
  }

  img {
    max-width: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a,
  a:visited {
    text-decoration: none;
    color: ${colors.white};
    transition: color 0.4s ease;
  }

  a:hover {
    color: ${colors.primary};
  }

  .container {
    width: 90%;
    max-width: 1590px;
    margin: 0 auto;
  }
`;
