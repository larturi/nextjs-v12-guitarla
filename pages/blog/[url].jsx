import Layout from "../../components/Layout";
import Image from "next/image";
import { formatearFecha } from '../../helpers';

import styles from '../../styles/Entrada.module.css';

const EntradaBlog = ({ entrada, carrito }) => {

    if (!entrada) {
        return;
    }

    const { titulo, contenido, imagen, published_at } = entrada;

    return (
        <Layout pagina={titulo} carrito={carrito}>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image 
                        layout="responsive"
                        src={imagen.url}
                        alt={`Imagen de ${titulo}`}
                        width={800}
                        height={600}
                    />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

export async function getServerSideProps({ query: { url } }) {

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/blogs?url=${url}`;
    const response = await fetch(apiUrl);

    if(response.status === 404) {
        return {
            redirect: {
              destination: '/error404', 
              permanent: false,
            },
        }
    } else {
        const data = await response.json();
        return {
            props: {
                entrada: data[0]
            }
        }
    }
}


export default EntradaBlog;