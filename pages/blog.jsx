import Layout from '../components/Layout';
import Entrada from '../components/Entrada';

const Blog = ({entradas}) => {

   return (
      <Layout pagina='Blog'>
         <main className='contenedor'>
            <h2 className='heading'>Blog</h2>

            <div>
               { entradas.map(entrada => (
                  <Entrada 
                     key={entrada.id}
                     entrada={entrada}
                  />
               )) }
            </div>
         </main>
      </Layout>
   );
};

export async function getServerSideProps() {

   const url = 'http://localhost:1337/blogs';
   const response = await fetch(url);
   const entradas = await response.json();

   return {
      props: {
         entradas
      }
   }
}

export default Blog;