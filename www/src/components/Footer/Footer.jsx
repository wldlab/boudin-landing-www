// vendors
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import { colors } from "../../styles/variables"

// images
import LogoPiedBleu from "../../images/logo__le-pied-bleu.svg"

// components
import Location from "../Location"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Location {
      locations: allSanityLocation(sort: { fields: sort, order: ASC }) {
        edges {
          node {
            name
            openningHour {
              day
              hours {
                fromTime {
                  hour
                  minute
                }
                toTime {
                  hour
                  minute
                }
                note
              }
            }
          }
        }
      }
    }
  `)

  const locations = (data.locations.edges || []).map(({ node }) => node)

  return (
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
        {locations.map((location, index) => (
          <Location
            index={index}
            place={location.name}
            title="Il est ici!"
            openningHour={location.openningHour}
          />
        ))}
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
}

export default Footer
