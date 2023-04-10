import React from "react";

class TodoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenForm = this.handleOpenForm.bind(this);
  }
  handleOpenForm() {
    this.props.formOpen();
  }

  render() {
    return (
      <div
        className={
          this.props.theme === true
            ? "todo-header"
            : "todo-header darck-main-theme"
        }
      >
        <h1>ToDoList</h1>
        <button className="btn-svg" onClick={this.handleOpenForm}>
          <span className="material-symbols-outlined">
            {this.props.open === true ? "close" : "add"}
          </span>
        </button>
      </div>
    );
  }
}

export default TodoHeader;
