import React from "react";

import { Header, Filters } from "./../../components";

export class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MainPage">
        <Header />
        <div className="container">
          <Filters filters={[{ title: "тест" }]} />
        </div>
      </div>
    );
  }
}
