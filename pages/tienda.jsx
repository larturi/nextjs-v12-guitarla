import Guitarras from '../components/Guitarras';
import Layout from '../components/Layout';

const Tienda = ({guitarras}) => {

   return (
      <Layout pagina='Tienda'>
         <main className='contenedor'>
            <h1 className='heading'>Nuestra Colección</h1>  

            <Guitarras guitarras={guitarras} />
         </main>
      </Layout>
   );
};

export async function getServerSideProps() {

   const url = `${process.env.NEXT_PUBLIC_API_URL}/guitarras?_sort=precio:desc`

   const response = await fetch(url);
   const guitarras = await response.json();

   return {
      props: {
         guitarras
      },
   };
}

export default Tienda;
