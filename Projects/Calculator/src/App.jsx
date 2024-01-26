import styles from './App.module.css'
import Display from './Components/Display'
import Buttons from './Components/Buttons'
import { useState } from 'react'
function App() {
  const [calVal ,setCalVal] = useState("");
  
  const onButtonClick =(buttonName)=>{
    if(buttonName === "C"){
      setCalVal("");
    }
    else if(buttonName === "="){
      const result=eval(calVal);
      setCalVal(result);
    }
    else{
      const newdisplayValue= calVal + buttonName;
      setCalVal(newdisplayValue);
    }
  }
  return (
   <div className={styles.mainContainer}>
    <Display displayValue={calVal}></Display>
    <Buttons onButtonClick={onButtonClick}></Buttons>
   </div>
  )
}

export default App
