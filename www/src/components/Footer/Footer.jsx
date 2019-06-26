// vendors
import React from "react"
import { css } from "@emotion/core"
import { colors } from "../../styles/variables"

// images
import LogoPiedBleu from "../../images/logo__le-pied-bleu.svg"

// components
import Location from "./Location"

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
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;

        @media (min-width: 690px) {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 970px) {
          grid-template-columns: repeat(3, 1fr);
        }

        @media (min-width: 1280px) {
          grid-template-columns: repeat(4, 1fr);
        }
      `}
      className="container"
    >
      <Location title="Il est ici!" place="Pied bleu, l'original">
        Lundi et mardi de 10h00 à 17h00
        <br />
        Mercredi au samedi 10h00 à 21h00
        <br />
        Dimanche 10h00 à 14h00
      </Location>

      <Location title="Là!" place="Le grand marché">
        À partir du 14 Juin
        <br />
        Du lundi au vendredi de 9h00 à 18h00
        <br />
        Samedi et dimanche de 9h00 à 17h00
      </Location>

      <Location title="Icitte!" place="Les galeries gourmandes">
        En septembre
        <br />
        De lundi à vendredi 10h00 à 21h00
        <br />
        Samedi et dimanche de 10h00 à 17h00
      </Location>

      <Location title="Par là-bas!" place="Marché de Sainte-Foy">
        Jeudi au dimanche de 10h00 à 17h00
      </Location>
    </div>

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

      <a href="mailto:lepatron@lepiedbleu.com">lepatron@lepiedbleu.com</a>

      <div className="">
        <img src={LogoPiedBleu} alt="Le pied bleu" />
      </div>
    </div>
  </footer>
)

export default Footer
