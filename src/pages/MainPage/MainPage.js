import React from "react";

import { Header, Filters, FlightTable } from "./../../components";

import { filters, tableHeaders } from "./../../constants";

export class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div className="MainPage">
        <Header />
        <div className="container">
          <Filters filters={filters} />
          <FlightTable tableHeaders={tableHeaders}/>
        </div>
      </div>
    );
  }
}
