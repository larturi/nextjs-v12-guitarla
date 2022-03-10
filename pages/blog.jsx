import Entradas from '../components/Entradas';
import Layout from '../components/Layout';

const Blog = ({entradas, carrito}) => {

   return (
      <Layout pagina='Blog' carrito={carrito}>
         <main className='contenedor'>
            <Entradas entradas={entradas} /> 
         </main>
      </Layout>
   );
};

export async function getServerSideProps() {

   const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs?_sort=created_at:desc`;
   const response = await fetch(url);
   const entradas = await response.json();

   return {
      props: {
         entradas
      }
   }
}

export default Blog;
