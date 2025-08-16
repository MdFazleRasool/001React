
import { memo } from "react";
function TodoListItem({todo,onDelete}){
    return(
        <li>
            {todo.value}
            <button onClick={() =>onDelete(todo.value)}>del</button>
        </li>
    );
}
export default memo(TodoListItem);