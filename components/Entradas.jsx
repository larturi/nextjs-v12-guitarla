import Entrada from "./Entrada";
import styles from  '../styles/Entrada.module.css';

const Entradas = ({entradas}) => {
    return (
      <>
          <h2 className='heading'>Blog</h2>
          <div className={styles.blog}>
            { entradas.map(entrada => (
                <Entrada
                    key={entrada.id}
                    entrada={entrada}
                />
            )) }
          </div>
      </>
    )
  }
  
  export default Entradas;