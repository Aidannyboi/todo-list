
const ListDisplay = (props) => {

    const {todoList, completed, deleted} = props;

    return(
        <div>
            <ol>
                {
                    todoList.map((todo, idx) => 
                    <div className="newTodo">
                        <li key = {idx}>
                            <p className="todoItem">{todo.todoItem} </p>
                            <input className="Complete" type="checkbox" onChange={() => completed(todo)}/> 
                            <button onClick={() => deleted(todo.id)}>Delete</button>
                        </li>
                    </div>)
                }
            </ol>
        </div>
    )
}

export default ListDisplay;