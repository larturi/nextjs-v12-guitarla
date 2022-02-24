import Layout from '../components/Layout';

const Blog = ({entradas}) => {

   console.log(entradas);

   return (
      <Layout pagina='Blog'>
         <h1 className='heading'>Blog</h1>
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
