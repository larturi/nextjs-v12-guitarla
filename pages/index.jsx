import Curso from '../components/Curso';
import Guitarras from '../components/Guitarras';
import Layout from '../components/Layout';

export default function Home({guitarras, cursos}) {

   console.log(cursos);
   return (
      <Layout pagina='Inicio'>
         <main className='contenedor'>
            <h1 className='heading'>Nuestra Colección</h1>

            <Guitarras guitarras={guitarras} />
            
         </main>

         <Curso curso={cursos[0]} />
      </Layout>
   );
}


export async function getServerSideProps() {

   const urlGuitarras = `${process.env.NEXT_PUBLIC_API_URL}/guitarras?_sort=precio:desc`;
   const urlCursos = `${process.env.NEXT_PUBLIC_API_URL}/cursos`;

   const [resGuitarras, resCursos] = await Promise.all([
      fetch(urlGuitarras),
      fetch(urlCursos),
   ]);

   const [guitarras, cursos] = await Promise.all([
      resGuitarras.json(),
      resCursos.json()
   ]);

   return {
      props: {
         guitarras,
         cursos
      },
   };
}