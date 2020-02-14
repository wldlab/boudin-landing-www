// vendors
import React from 'react';
import { css } from '@emotion/core';
import { colors } from '../../styles/variables';

// images
import LogoPiedBleu from '../../images/logo__le-pied-bleu.svg';

const Footer = () => (
  <footer
    css={css`
        z-index: 6;
        position: relative;
        padding: 50px 0;
        background-color: ${colors.secondary};
        color: ${colors.primary};
        text-transform: uppercase;
      `}
  >
    <div
      css={css`
          font-size: 0.75em;
          text-align: center;

          a {
            display: block;
            margin: 8px 0;

            @media (min-width: 500px) {
              margin: 3px 0;
            }
          }

          @media (min-width: 500px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }
        `}
      className="container"
    >
      <ul>
        <li>
          <a
            href="https://www.facebook.com/RoiDuBoudin/"
            target="_blank"
            rel="noopener noreferrer"
          >
              Facebook
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/explore/tags/lepiedbleu/"
            target="_blank"
            rel="noopener noreferrer"
          >
              Instagram
          </a>
        </li>
      </ul>

      <a href="mailto:lepatron@piedbleu.com">lepatron@piedbleu.com</a>

      <div className="">
        <img src={LogoPiedBleu} alt="Le pied bleu" />
      </div>
    </div>
  </footer>
);

export default Footer;
