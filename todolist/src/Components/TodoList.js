import React from "react";
import Todos from "./Todos";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todoList = this.props.todoList
      .filter((todos) => {
        if (this.props.search !== "") {
          return (
            todos[this.props.actualList] &&
            todos.title.includes(this.props.search)
          );
        }
        return todos[this.props.actualList];
      })
      .map((todos) => (
        <Todos
          key={todos.id}
          todo={todos}
          flagsTodo={this.props.flagsTodo}
          deleteTodo={this.props.deleteTodo}
          theme={this.props.theme}
          editTodo={this.props.editTodo}
        />
      ));

    if (!todoList.length) {
      return (
        <div
          className={
            this.props.theme === true
              ? "todo-list"
              : "todo-list darck-main-theme"
          }
        >
          <h1>Тут пока пусто...</h1>
        </div>
      );
    }
    return (
      <div
        className={
          this.props.theme === true ? "todo-list" : "todo-list darck-main-theme"
        }
      >
        <ul>{todoList}</ul>
      </div>
    );
  }
}

export default TodoList;
