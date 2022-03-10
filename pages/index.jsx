import Curso from '../components/Curso';
import Entradas from '../components/Entradas';
import Guitarras from '../components/Guitarras';
import Layout from '../components/Layout';

export default function Home({ guitarras, cursos, entradas, carrito }) {

   return (
      <Layout
         pagina='Inicio'
         carrito={carrito}
         guitarra={guitarras[3]}
      >
         <main className='contenedor'>
            <h1 className='heading'>Nuestra Colección</h1>

            <Guitarras guitarras={guitarras} />
         </main>

         <Curso curso={cursos[0]} />

         <section className='contenedor'>
            <Entradas entradas={entradas} />
         </section>
      </Layout>
   );
}

export async function getServerSideProps() {
   const urlGuitarras = `${process.env.NEXT_PUBLIC_API_URL}/guitarras?_sort=precio:desc`;
   const urlCursos = `${process.env.NEXT_PUBLIC_API_URL}/cursos`;
   const urlBlog = `${process.env.NEXT_PUBLIC_API_URL}/blogs?_limit=3&_sort=created_at:desc`;

   const [resGuitarras, resCursos, resBlog] = await Promise.all([
      fetch(urlGuitarras),
      fetch(urlCursos),
      fetch(urlBlog),
   ]);

   const [guitarras, cursos, entradas] = await Promise.all([
      resGuitarras.json(),
      resCursos.json(),
      resBlog.json(),
   ]);

   return {
      props: {
         guitarras,
         cursos,
         entradas,
      },
   };
}
