import React from "react";
import TodoHeader from "./TodoHeader";
import TodoForm from "./TodoForm";
import TodoSort from "./TodoSort";
import TodoList from "./TodoList";
import ButtonList from "./ButtonList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.formOpen = this.formOpen.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.flagsTodo = this.flagsTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.swichTheme = this.swichTheme.bind(this);
    this.swichList = this.swichList.bind(this);
    this.todoSearch = this.todoSearch.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.state = props.state;
  }

  async storageUpdate(data, index = 0) {
    await this.setState((prevState) => {
      return {
        ...prevState,
        ...data,
        nextIndex: prevState.nextIndex + index,
      };
    });
    this.props.setStorageState(this.state);
  }

  formOpen() {
    this.setState((prevState) => {
      return {
        ...prevState,
        formOpened: !this.state.formOpened,
      };
    });
  }

  createTodo(todo) {
    const newTodoList = this.state.todoList;
    newTodoList.push({
      id: this.state.nextIndex,
      ...todo,
      checked: true,
      done: false,
      inArchive: false,
    });
    this.storageUpdate(
      {
        todoList: newTodoList,
      },
      1
    );
  }

  flagsTodo(id, type) {
    const newTodoList = this.state.todoList.map((todo) => {
      if (todo.id === Number(id)) {
        if (type === "checked") {
          todo.checked = !todo.checked;
          todo.done = !todo.done;
        }
        if (type === "inArchive") {
          todo.inArchive = !todo.inArchive;
          todo.checked = !todo.checked;
        }
      }
      return todo;
    });
    this.storageUpdate({
      todoList: newTodoList,
    });
  }

  editTodo(id, data) {
    const newTodoList = this.state.todoList.map((todo) => {
      if (todo.id === Number(id)) {
        return { ...todo, ...data };
      }
      return todo;
    });
    this.storageUpdate({
      todoList: newTodoList,
    });
  }

  deleteTodo(id) {
    const newTodoList = this.state.todoList.filter(
      (todo) => todo.id !== Number(id)
    );
    this.storageUpdate({
      todoList: newTodoList,
    });
  }

  swichTheme() {
    this.setState((prevState) => {
      return { ...prevState, lightTheme: !this.state.lightTheme };
    });
    document.querySelector("body").classList.toggle("darck-main-theme");
  }
  swichList(type) {
    this.setState((prevState) => {
      return { ...prevState, actualList: type };
    });
  }

  todoSearch(str) {
    this.setState((prevState) => {
      return { ...prevState, search: str };
    });
  }

  render() {
    return (
      <>
        <button className="theme-btn btn-svg" onClick={this.swichTheme}>
          <ButtonList type={"theme"} lightTheme={this.state.lightTheme} />
        </button>

        <div
          className={
            this.state.lightTheme === true
              ? "container"
              : "container darck-second-theme"
          }
        >
          <TodoHeader
            open={this.state.formOpened}
            formOpen={this.formOpen}
            theme={this.state.lightTheme}
          />

          {this.state.formOpened ? (
            <TodoForm
              createTodo={this.createTodo}
              theme={this.state.lightTheme}
            />
          ) : (
            ""
          )}

          <TodoSort
            swichList={this.swichList}
            todoSearch={this.todoSearch}
            theme={this.state.lightTheme}
          />

          <TodoList
            todoList={this.state.todoList}
            flagsTodo={this.flagsTodo}
            deleteTodo={this.deleteTodo}
            actualList={this.state.actualList}
            search={this.state.search}
            theme={this.state.lightTheme}
            editTodo={this.editTodo}
          />
        </div>
      </>
    );
  }
}

export default App;
