import { useContext } from "react";
import { TodoItemContext } from "../store/items-context-store";
import TodoItem from "./TodoItem";
function TodoItems(){
  const {todoItems} = useContext(TodoItemContext);
  return <>
    {todoItems.map(item=> <TodoItem key={item.name} TodoName={item.name} TodoDate={item.dueDate} >
    </TodoItem>
    )}
  </>
}
export default TodoItems;