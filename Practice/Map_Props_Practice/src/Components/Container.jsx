import styles from './Container.module.css'
function Container({children}){
  return <div className={styles.containerBorder}>
   {children}
  </div>
}
export default Container;