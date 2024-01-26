function InputItem({handleKeyDown}){
  return <input onKeyDown ={handleKeyDown} className="p-2 w-100" type="text" placeholder="Enter your items here"/>
}
export default InputItem;