import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Guitarra.module.css';

const Guitarra = ({guitarra}) => {

    const {nombre, descripcion, precio, imagen, url} = guitarra;

    return (
        <div className={styles.guitarra}>
            <Image 
                layout="responsive"
                src={imagen.url}
                alt={`Image of ${nombre}`}
                width={180}
                height={350}
            />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>Ver Guitarra</a>
                </Link>
            </div>
        </div>
    )
}

export default Guitarra;