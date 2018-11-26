import React from "react";

import "./Filter.css";

import PropTypes from "prop-types";

export const Filter = props => {
  const { filter, className, active, onClick } = props;

  return (
    <div
      className={"Filter " + className + (active ? "active" : "")}
      onClick={onClick}
    >
      {filter.title}
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

Filter.defaultProps = {
  className: "",
  active: false,
  onClick: () => {}
};
