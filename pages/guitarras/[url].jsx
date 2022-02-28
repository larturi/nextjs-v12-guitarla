import Image from "next/image";
import Layout from "../../components/Layout";
import styles from '../../styles/Guitarra.module.css';

const GuitarraDetail = ({ guitarra }) => {

   const { nombre, descripcion, precio, imagen } = guitarra[0];

   console.log(nombre);

   return (
      <Layout
         pagina={`Guitarra ${nombre}`}
      >
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
               </div>
         </div>
      </Layout>
   );
};

export async function getServerSideProps({query: {url}}) {

   const urlGuitarra = `${process.env.NEXT_PUBLIC_API_URL}/guitarras?url=${url}`;
   const respuesta = await fetch(urlGuitarra);
   const guitarra = await respuesta.json();

   return {
      props: {
         guitarra
      }
   }

}

export default GuitarraDetail;