import React from 'react';

import styles from '../styles/Curso.module.css';

const Curso = ({ curso }) => {

  const { titulo, contenido, imagen } = curso;

  return (
    <section>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{titulo}</h2>
                <p className={styles.texto}>{contenido}</p>

                <a className={styles.enlace} href="#">Mas Información</a>
            </div>
        </div>

        <style jsx>{`
            section {
                height: 40rem;
                margin-top: 5rem;
                background-image: linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.7)), url(${imagen.url});
            }
        `}</style>
    </section>
  )
}

export default Curso;