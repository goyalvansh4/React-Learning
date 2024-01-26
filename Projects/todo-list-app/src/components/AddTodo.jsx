import { useRef } from "react";
import { useContext } from "react";
import { TodoItemContext } from "../store/items-context-store";
import { IoMdAddCircleOutline } from "react-icons/io";
function AddTodo() {
  const { addNewItem } = useContext(TodoItemContext);
   const  todoNameElement=useRef();
   const  dueDateElement=useRef();


  const handleButtonClicked = (event) => {
    event.preventDefault();
     const newItem = todoNameElement.current.value;
     todoNameElement.current.value="";
     const newDate = dueDateElement.current.value;
     dueDateElement.current.value="";
     addNewItem(newItem, newDate);
  };
  return (
    <div className="container">
      <form className="row mt-4" onSubmit={handleButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter your task here"
          />
        </div>
        <div className="col-4 ">
          <input type="date"  ref={dueDateElement}/>
        </div>
        <div className="col-2 ">
          <button
            type="submit"
            className="btn btn-success"
          >
            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
