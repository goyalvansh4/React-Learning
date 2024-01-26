import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemContext } from "../store/items-context-store";
function WelcomeMessage(){
  const {todoItems} = useContext(TodoItemContext);
  return <> {todoItems.length === 0 && <p className={styles.welcome}>
  Enjoy Your Day
  </p>}</>
}

export default WelcomeMessage;