import { useState } from "react";
import Items from "./Items";
function FoodItems({Product}){

    let [activeItem , setActiveState]= useState([]);
    let handleOnClick= (item,event)=>{
      let newItem=[...activeItem,item];
      setActiveState(newItem);
   }
  return <ul className="list-group">
    {Product.map(item => <Items key={item} items={item} bought={activeItem.includes(item)} handleOnClick={(event)=>handleOnClick(item,event)} ></Items>)}
</ul>
}
export default FoodItems;