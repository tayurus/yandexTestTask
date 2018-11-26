import React from "react";

import "./Filters.css";

import { Filter } from "./../index.js";

import PropTypes from "prop-types";

export const Filters = props => {
  const { className, filters } = props;
  return (
    <div className={"Filters " + className}>
      <h3 className="Filters__title">Показать рейсы:</h3>
      <div className="Filters__items">
        {filters.map(filter => (
          <Filter filter={filter} className="m-3" />
        ))}
      </div>
    </div>
  );
};

Filters.propTypes = {
  filters: PropTypes.array.isRequired
};

Filters.defaultProps = {
  className: ""
};
