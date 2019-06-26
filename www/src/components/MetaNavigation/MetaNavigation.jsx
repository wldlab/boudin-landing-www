// vendors
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import colors from "../../styles/variables/colors"

const Item = styled.li`
  display: inline-block;
  margin-right: 2em;
  transition: all 1s cubic-bezier(0.7, 0.01, 0.3, 1);

  /* transform: translate3d(0, -50px, 0); */
  /* opacity: 0; */

  transform: translateZ(0);
  opacity: 1;

  @media screen and (max-width: 991px) {
    margin-right: 0.8em;
  }

  &:last-child {
    margin-right: 0;
  }
`

const Link = styled.a`
  text-transform: uppercase;
  font-weight: 300;
  color: ${props => (props.isActive ? colors.primary : colors.white)};
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const MetaNavigation = () => (
  <div
    css={css`
      position: relative;
      background-color: ${colors.secondary};
      padding: 0.7em 30px;
      z-index: 100;
      font-size: 14px;

      @media screen and (max-width: 767px) {
        font-size: 12.6px;
      }
    `}
  >
    <nav
      css={css`
        margin: auto;
        text-align: center;
      `}
    >
      <List>
        <Item>
          <Link href="https://piedbleu.com/" style={{ transitionDelay: "0ms" }}>
            Le pied bleu
          </Link>
        </Item>
        <Item>
          <Link
            href="http://bouchonquebec.com/"
            style={{ transitionDelay: "100ms" }}
          >
            Le bouchon
          </Link>
        </Item>
        <Item>
          <Link
            href="http://lerenardetlachouette.com/"
            style={{ transitionDelay: "200ms" }}
          >
            Le renard et la chouette
          </Link>
        </Item>
        <Item>
          <Link
            href="http://leroiduboudin.com/"
            style={{ transitionDelay: "300ms" }}
            isActive
          >
            Le roi du boudin
          </Link>
        </Item>
        <Item>
          <Link
            href="http://restomamaison.com/"
            style={{ transitionDelay: "400ms" }}
          >
            Ma maison
          </Link>
        </Item>
      </List>
    </nav>
  </div>
)

export default MetaNavigation
