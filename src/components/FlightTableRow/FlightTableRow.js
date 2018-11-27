import React from 'react';

import './FlightTableRow.css';

import PropTypes from 'prop-types';


export const FlightTableRow = props => {

  const { flight, className } = props;

  return(
    <tr className={"FlightTableRow " + className}>
      {
        Object.keys(flight).map( flightField => <td>{flightField.text}</td>)
      }
    </tr>
  )
}

FlightTableRow.propTypes = {
  flight: PropTypes.object.isRequired
}


FlightTableRow.defaultProps = {
  className: ""
}
