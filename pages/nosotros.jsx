import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
   return (
      <Layout pagina='Nosotros'>
         <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>

            <div className={styles.contenido}>

               <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen Nosotros' />

               <div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum repudiandae error voluptates obcaecati sint vitae! Ad quis culpa placeat in dolor totam quo architecto. Excepturi minima voluptatibus eum magnam asperiores aspernatur ullam, in adipisci tempora velit, quisquam dolorum quia corporis!</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum repudiandae error voluptates obcaecati sint vitae! Ad quis culpa placeat in dolor totam quo architecto. Excepturi minima voluptatibus eum magnam asperiores aspernatur ullam, in adipisci tempora velit, quisquam dolorum quia corporis!</p>
               </div>
            </div>
         </main>
      </Layout>
   );
};

export default Nosotros;
