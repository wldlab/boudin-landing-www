// vendors
import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import VisuallyHidden from '@reach/visually-hidden';
import { colors } from '../styles/variables';

const Menu = () => {
  const data = useStaticQuery(graphql`
    query Menu {
      products: allSanityProduct {
        group(field: category___name) {
          category: fieldValue
          edges {
            node {
              name
            }
          }
        }
      }
    }
  `);

  const products = (data.products.group || []);

  return (
    <section
      css={css`
        z-index: 6;
        position: relative;
        padding: 50px 0;
        text-transform: uppercase;
        color: ${colors.secondary};
        font-size: ${24 / 16}em;
        font-weight: bold;
      `}
      className="container"
    >
      <VisuallyHidden>
        <h2>Produits</h2>
      </VisuallyHidden>

      <div
        css={css`
        columns: 1;
        column-gap: 20px;

        @media (min-width: 690px) {
          columns: 2;
        }

        @media (min-width: 970px) {
          columns: 3;
        }

        @media (min-width: 1280px) {
          columns: 4;
        }
      `}
      >
        {products.map((product) => (
          <div
            css={css`
              break-inside: avoid;
            `}
          >
            <h3
              css={css`
              color: ${colors.white};
              margin-bottom: 1em;
            `}
            >
              {product.category}

            </h3>
            <ul>
              {product.edges.map(({ node }) => <li>{node.name}</li>)}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Menu;
