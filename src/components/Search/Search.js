import React from "react";

import "./Search.css";

export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };

    this.toggleSearchOpen = this.toggleSearchOpen.bind(this);
  }

  toggleSearchOpen() {
    this.setState({ open: !this.state.open }, () => {
      if (this.state.open) {
        document.querySelector("body").style.overflow = "hidden";
      } else {
        document.querySelector("body").style.overflow = "auto";
      }
    });
  }

  render() {
    const { className, title, onTextChange, value, placeholder } = this.props;
    const { open } = this.state;

    return (
      <div className={"Search " + className}>
        <div className="Search__title" onClick={this.toggleSearchOpen}>
          {title}
        </div>
        {open && (
          <div className="Search__full-page" onClick={this.toggleSearchOpen}>
            <input
              type="search"
              className="Search__field"
              onChange={onTextChange}
              value={value}
              onClick={e => e.stopPropagation()}
              placeholder={placeholder}
            />
          </div>
        )}
      </div>
    );
  }
}

Search.defaultProps = {
  className: "",
  title: "Поиск",
  placeholder: "Введите поисковую строку"
};
