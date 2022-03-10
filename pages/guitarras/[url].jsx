import { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import useCarrito from '../../hooks/useCarrito';
import styles from '../../styles/GuitarraDetail.module.css';

const GuitarraDetail = ({ guitarra }) => {

   const [cantidad, setCantidad] = useState(1);

   const { addCarrito } = useCarrito();

   const { nombre, descripcion, precio, imagen, id } = guitarra[0];

   const handleSubmit = e => {
      e.preventDefault();
      
      if (cantidad > 0) {
         const guitarraSeleccionada = {
           id,
           imagen: imagen.url,
           nombre,
           precio,
           cantidad
         }
         addCarrito(guitarraSeleccionada);
      }
      
   };

   return (
      <Layout pagina={`Guitarra ${nombre}`}>
         <div className={styles.guitarra}>
            <div className={styles.title}>
               <h3>{nombre}</h3>
            </div>

            <div className={styles.content}>
               <Image
                  layout='responsive'
                  src={imagen.url}
                  alt={`Image of ${nombre}`}
                  width={160}
                  height={320}
               />
               <div className={styles.contenido}>
                  
                  <p className={styles.descripcion}>{descripcion}</p>
                  <p className={styles.precio}>${precio}</p>

                  <form className={styles.formulario} onSubmit={handleSubmit}>
                     <label>Cantidad:</label>
                     <select 
                        value={cantidad}
                        onChange={e => setCantidad(parseInt(e.target.value))}
                     >
                        <option value=''>-- Seleccione -- </option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                     </select>

                     <input type='submit' value='Agregar al carrito' />
                  </form>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export async function getServerSideProps({ query: { url } }) {
   const urlGuitarra = `${process.env.NEXT_PUBLIC_API_URL}/guitarras?url=${url}`;
   const respuesta = await fetch(urlGuitarra);
   const guitarra = await respuesta.json();

   return {
      props: {
         guitarra,
      },
   };
}

export default GuitarraDetail;
