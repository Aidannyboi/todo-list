import './App.css'
import { useState } from "react"
import ListDisplay from './components/displayTodo'
import TodoList from './components/todoForm'
function App() {

  const [todoList, setTodoList] = useState([])

  const onNewTodo = (newTodo) => {
    setTodoList((prevTodos) => ([...prevTodos, newTodo]))
  }

  const deleted = (idBelow) => {
    const filteredtodos = todoList.filter((todos) => {
      return todos.id !== idBelow;
    });

    setTodoList(filteredtodos);
  }

  const completed = (todo) => {
    let updatetodos = todoList.map((todos) => {
      if(todos === todo){
        let newTodos = {...todo}
        newTodos.isComplete = !todo.isComplete;
        return newTodos;
      }
      else{
        return todos;
      }
    })
    setTodoList(updatetodos);
  }

  return (
    <>
      <TodoList onNewTodo={onNewTodo}/>
      <ListDisplay todoList={todoList} deleted={deleted} completed={completed}/>
    </>
  )
}

export default App
