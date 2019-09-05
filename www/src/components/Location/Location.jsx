// vendors
import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

// styles
import { colors } from '../../styles/variables';
import dayToConditionalString from '../../../../utils/dayToConditionalString';
import normalizeNumber from '../../../../utils/normalizeNumber';

const titleList = ['Il est ici!', 'Là!', 'Icitte!', 'Par là-bas!'];

const Location = ({ place, index, openningHour }) => (
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
      {titleList[index]}
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
      {openningHour.map((days) => (
        <span
          css={css`
                display: block;
              `}
        >
          {dayToConditionalString(days.day)}
          {' de '}
          {days.hours.map((hour) => (
            <span>
              {`${hour.fromTime.hour}h`}
              {hour.fromTime.minute
                ? normalizeNumber(hour.fromTime.minute)
                : '00'}
              {' à '}
              {`${hour.toTime.hour}h`}
              {hour.toTime.minute
                ? normalizeNumber(hour.toTime.minute)
                : '00'}
            </span>
          ))}
        </span>
      ))}
    </p>
  </div>
);

Location.propTypes = {
  place: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  openningHour: PropTypes.shape(),
};

Location.defaultProps = {
  openningHour: [],
};

export default Location;
