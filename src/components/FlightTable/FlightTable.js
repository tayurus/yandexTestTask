import React from 'react';

import './FlightTable.css';

import PropTypes from 'prop-types';

import { FlightTableRow } from './../index.js';

export const FlightTable = props => {

  const { flights, className, tableHeaders } = props;
  console.log('tableHeaders =' , tableHeaders);
  return(
    <div className={"FlightTable " + className}>
      <table className='FlightTable__table'>

        {
          tableHeaders.length > 0 &&
          <tr>
            {
              tableHeaders.map( th => <th>{th.text}</th> )
            }
          </tr>
        }

        {
          //flights.map( flight => <FlightTableRow flight={flight}/> )
        }
      </table>
    </div>
  )
}

FlightTable.propTypes = {
  flights: PropTypes.array.isRequired
}


FlightTable.defaultProps = {
  className: "",
  tableHeaders: []
}
