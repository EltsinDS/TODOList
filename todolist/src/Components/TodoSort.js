import React from "react";

class TodoSort extends React.Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSwitch(event) {
    this.props.swichList(event.target.value);
  }

  handleSearch(event) {
    this.props.todoSearch(event.target.value);
  }

  render() {
    function debounce(func, timeout = 500) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    }
    const processChange = debounce((event) => this.handleSearch(event));

    return (
      <div
        className={
          this.props.theme === true ? "todo-sort" : "todo-sort darck-main-theme"
        }
      >
        <div className="sort-btn">
          <button
            className={
              this.props.theme === true
                ? "btn-text"
                : "btn-text darck-second-theme"
            }
            value={"checked"}
            onClick={this.handleSwitch}
          >
            Активные
          </button>
          <button
            className={
              this.props.theme === true
                ? "btn-text"
                : "btn-text darck-second-theme"
            }
            value={"done"}
            onClick={this.handleSwitch}
          >
            Выполенные
          </button>
          <button
            className={
              this.props.theme === true
                ? "btn-text"
                : "btn-text darck-second-theme"
            }
            value={"inArchive"}
            onClick={this.handleSwitch}
          >
            Архив
          </button>
        </div>
        <input
          className={this.props.theme === true ? "" : "darck-second-theme"}
          type="text"
          placeholder="Найти"
          onChange={processChange}
        ></input>
      </div>
    );
  }
}

export default TodoSort;
