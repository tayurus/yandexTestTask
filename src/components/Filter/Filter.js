import React from "react";

import "./Filter.css";

import PropTypes from "prop-types";

export const Filter = props => {
  const { filter, className } = props;

  return (
    <div
      className={"Filter " + className + (filter.active ? "Filter_active" : "")}
    >
      {filter.title}
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.object.isRequired
};

Filter.defaultProps = {
  className: ""
};
