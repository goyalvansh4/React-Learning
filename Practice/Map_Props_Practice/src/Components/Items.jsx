import styles from './Items.module.css'
function Items({items,bought,handleOnClick}){
  return  <li className={`list-group-item ${bought && 'active'}`}>
    <span className={`styles.item`}>{items}</span>
    <button  onClick={handleOnClick} className={`btn btn-info ${styles.myButton}`}>Buy</button>
  </li>
}
export default Items;