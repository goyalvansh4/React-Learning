import { useRef } from "react";
import { useDispatch } from "react-redux";

const CounterButton = () => {
 
 const dispacth = useDispatch();
 const inputElem=useRef();

const handleIncrement=()=>{
  dispacth({type:"INCREMENT"})
}

const handleDecrement=()=>{
  dispacth({type:"DECREMENT"})
}
const handleAdd=()=>{
  
  dispacth({type:"ADD",payload:{
    num:inputElem.current.value,
  }})
  inputElem.current.value=""
}
const handleSub=()=>{
  dispacth({type:"SUB",payload:{
    num:inputElem.current.value,
  }})
  inputElem.current.value=""
}

  return (
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleIncrement}>
        +1
      </button>
      <button type="button" className="btn btn-success btn-lg px-4" onClick={handleDecrement}>
        -1
      </button>
      
    </div>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-2">
      <input 
      ref={inputElem}
      type="text"
      className="input"
      placeholder="Enter Number" />
      <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleAdd}>
        ADD
      </button>
      <button type="button" className="btn btn-success btn-lg px-4" onClick={handleSub}>SUBTRACT</button>
    </div>
    </>
  );
};

export default CounterButton;
