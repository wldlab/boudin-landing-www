// vendors
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import VisuallyHidden from '@reach/visually-hidden';
import { colors } from '../styles/variables';
import Location from '../components/Location';

const Locations = () => {
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
  `);

  const locations = (data.locations.edges || []).map(({ node }) => node);

  return (
    <section
      css={css`
        z-index: 6;
        position: relative;
        padding: 50px 0;
        background-color: ${colors.secondary};
        color: ${colors.primary};
        text-transform: uppercase;
      `}
    >
      <VisuallyHidden>
        <h2>Où nous trouver</h2>
      </VisuallyHidden>

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
    </section>
  );
};

export default Locations;
