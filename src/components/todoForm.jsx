import { useState } from "react"

const TodoList = (props) => {
    const [todoItem, setTodoItem] = useState("")
    const {onNewTodo} = props;
    const [todoError, setTodoError] = useState("")


const handleTodo = (e) => {
    setTodoItem(e.target.value)
    if( e.target.value.length < 1){
        setTodoError("Must input a Todo Item.")
    }
    else if(e.target.value.length <= 2){
        setTodoError("Must be greater than 2 characters.")
    }
    else{
        setTodoError("")
    }
}

const createItem = (e) => {
    e.preventDefault();

    onNewTodo({
        todoItem : todoItem,
        id : Math.floor(Math.random() * 1000000).toString(),
    });
    setTodoItem('');
}

return (
    <div>
        <form onSubmit={createItem}>
            <div className="formDesign">
                <p>{todoError}</p>
                <input type="text" value={todoItem} onChange={handleTodo} className="todoInput"/>
                <input type="submit" value = "Add Todo" className="todoSubmit"/>
            </div>
        </form>
    </div>
)

}

export default TodoList;