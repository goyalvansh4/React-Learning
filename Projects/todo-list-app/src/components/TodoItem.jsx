import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { TodoItemContext } from "../store/items-context-store";
function TodoItem({ TodoName, TodoDate}) {
  // let todoName="Buy a coffee for me";
  // let todoDate="4/1/2024"
  const { deleteItem } = useContext(TodoItemContext);
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger px-3"
            onClick={() => {
              deleteItem(TodoName);
            }}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
