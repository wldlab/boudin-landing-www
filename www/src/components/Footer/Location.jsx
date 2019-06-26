// vendors
import React from "react"
import { css } from "@emotion/core"

// styles
import { colors } from "../../styles/variables"

const Location = ({ title, place, address, children, ...props }) => (
  <div
    css={css`
      width: 100%;
      margin-bottom: 30px;
    `}
  >
    <h3
      css={css`
        font-size: 2em;
        line-height: 1.1875em;
      `}
    >
      {title}
    </h3>

    <h4
      css={css`
        color: ${colors.white};
      `}
    >
      {place}
    </h4>

    <hr
      css={css`
        background-color: ${colors.primary};
        height: 2px;
        border: 0;
        width: 7px;
        margin: 10px 0;
      `}
    />

    <p
      css={css`
        margin: 0;
      `}
    >
      {children}
    </p>
  </div>
)

export default Location
