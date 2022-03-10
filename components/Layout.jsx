/* eslint-disable @next/next/no-page-custom-font */

import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pagina, guitarra, carrito }) => {

   return (
      <>
         <Head>
            <title>Guitar LA | {pagina}</title>
            <meta
               name='description'
               content='Sitio web de venta de Guitarras'
            />

            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' />
         </Head>

         <Header guitarra={guitarra} carrito={carrito} />

         {children}

         <Footer />
      </>
   );
};

Layout.defaultProps = {
   guitarra: null,
};

export default Layout;
