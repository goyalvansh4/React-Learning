import Heading from './Components/Heading';
import InputItem from './Components/InputItem';
import ErrorMessage from './Components/ErrorMessage';
import FoodItems from './Components/FoodItems';
import Container from './Components/Container';
import './App.css';
import { useState } from 'react';

function App() {
  //let foodItems=["Dal","Green Vegetables","Fruits","Milk","Dry Fruits"];

   const [foodItems , setfoodItems]=  useState([]);

   const handleKeyDown = (event)=>{
      if(event.key === "Enter"){
        let newFoodItem = event.target.value;
        event.target.value="";
        let newItems =[...foodItems,newFoodItem];
        
        setfoodItems(newItems);
      }
   }

   return <Container>
   <Heading></Heading>
   <InputItem handleKeyDown={handleKeyDown}></InputItem>
  <ErrorMessage Items={foodItems}></ErrorMessage>
  <FoodItems Product={foodItems}></FoodItems>
  </Container>
}

export default App
