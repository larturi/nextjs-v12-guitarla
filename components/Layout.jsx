import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

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

         <Header />

         {children}

         <Footer />
      </>
   );
};

export default Layout;
