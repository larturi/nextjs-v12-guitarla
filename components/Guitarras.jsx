import Guitarra from "./Guitarra";

import styles from '../styles/Guitarras.module.css';

const Guitarras = ({guitarras}) => {

  return (
    <div className={styles.guitarras}>
        { guitarras.map(guitarra => (
            <Guitarra 
                key={guitarra.id} 
                guitarra={guitarra} 
            />
        ))}
    </div>
  )
}

export default Guitarras;