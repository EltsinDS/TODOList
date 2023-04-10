import React from "react";
import TodoContent from "./TodoContent";
import ButtonList from "./ButtonList";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleArchiv = this.handleArchiv.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.editForm = this.editForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      edition: false,
      title: this.props.todo.title,
      text: this.props.todo.text,
    };
  }

  handleCheck(event) {
    const id = event.target.value ?? event.target.parentNode.value;
    this.props.flagsTodo(id, "checked");
  }
  handleArchiv(event) {
    const id = event.target.value ?? event.target.parentNode.value;
    this.props.flagsTodo(id, "inArchive");
  }
  handleDelete(event) {
    const id = event.target.value ?? event.target.parentNode.value;
    this.props.deleteTodo(id);
  }
  editForm() {
    this.setState((prevState) => {
      return { edition: !prevState.edition };
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.editTodo(event.target.name, {
      title: this.state.title,
      text: this.state.text,
    });
    this.editForm();
  }

  render() {
    if (this.state.edition) {
      return (
        <li>
          <div
            className={
              this.props.theme === true
                ? "edition-form"
                : "edition-form darck-main-theme"
            }
          >
            <form onSubmit={this.handleSubmit} name={this.props.todo.id}>
              <input
                type="text"
                name="title"
                placeholder="Заголовок"
                value={this.state.title}
                className={
                  this.props.theme === true ? "" : "darck-second-theme"
                }
                onChange={this.handleChange}
              />
              <div className="edition-btn">
                <button
                  className="btn-svg"
                  type="submit"
                  value={this.props.todo.id}
                >
                  <ButtonList type={"done"} id={this.props.todo.id} />
                </button>
                <button
                  className="btn-svg"
                  onClick={this.editForm}
                  value={this.props.todo.id}
                >
                  <ButtonList type={"close"} id={this.props.todo.id} />
                </button>
              </div>
              <textarea
                placeholder="Описание"
                name="text"
                value={this.state.text}
                className={
                  this.props.theme === true ? "" : "darck-second-theme"
                }
                onChange={this.handleChange}
              ></textarea>
            </form>
          </div>
        </li>
      );
    }
    return (
      <li>
        <div className="todo-body">
          <div className="todo-info">
            {this.props.todo.inArchive === true ? (
              ""
            ) : (
              <button
                className="btn-svg"
                value={this.props.todo.id}
                onClick={this.handleCheck}
              >
                <ButtonList
                  type={"check"}
                  checked={this.props.todo.checked}
                  id={this.props.todo.id}
                />
              </button>
            )}
            <TodoContent
              title={this.props.todo.title}
              text={this.props.todo.text}
            />
          </div>
          <div className="todo-edition">
            {this.props.todo.checked === true ? (
              <button
                className="btn-svg"
                value={this.props.todo.id}
                onClick={this.editForm}
              >
                <ButtonList type={"edit"} id={this.props.todo.id} />
              </button>
            ) : (
              ""
            )}
            {this.props.todo.done === true ? (
              ""
            ) : (
              <button
                className="btn-svg"
                value={this.props.todo.id}
                onClick={this.handleArchiv}
              >
                <ButtonList
                  id={this.props.todo.id}
                  type={"archive"}
                  inArchive={this.props.todo.inArchive}
                />
              </button>
            )}

            <button
              className="btn-svg"
              value={this.props.todo.id}
              onClick={this.handleDelete}
            >
              <ButtonList id={this.props.todo.id} type={"delete"} />
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default Todos;
