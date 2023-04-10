import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", text: "", placeholder: "Заголовок" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title.length >= 2) {
      this.props.createTodo({ title: this.state.title, text: this.state.text });
      this.setState({ title: "", text: "", placeholder: "Заголовок" });
    } else {
      this.setState({
        title: "",
        text: "",
        placeholder: "Введено менее 2х символов",
      });
    }
  }

  render() {
    return (
      <div
        className={
          this.props.theme === true ? "todo-form" : "todo-form darck-main-theme"
        }
      >
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder={this.state.placeholder}
            value={this.state.title}
            onChange={this.handleChange}
            className={this.props.theme === true ? "" : "darck-second-theme"}
          ></input>
          <textarea
            placeholder="Описание"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            className={this.props.theme === true ? "" : "darck-second-theme"}
          ></textarea>
          <input
            className={
              this.props.theme === true
                ? "btn-text"
                : "btn-text darck-second-theme"
            }
            type="submit"
            value="Добавить"
          ></input>
        </form>
      </div>
    );
  }
}

export default TodoForm;
