import Head from 'next/head';

const Layout = ({ children, pagina }) => {
   return (
      <>
         <Head>
            <title>Guitar LA | {pagina}</title>
            <meta
               name='description'
               content='Sitio web de venta de Guitarras'
            />
         </Head>
         <h1>Desde Layout</h1>
         {children}
      </>
   );
};

export default Layout;
