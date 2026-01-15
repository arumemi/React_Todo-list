import styles from './Tittle.module.css'
import Typography from '../container/Typography/Typography'


const Tittle = () => {
  return (
   <Typography fontSize="32px" bold>
     <div className={styles.title}>Todo-App</div>
   </Typography>
  )
}

export default Tittle