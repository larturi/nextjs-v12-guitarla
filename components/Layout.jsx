/* eslint-disable @next/next/no-page-custom-font */

import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pagina, guitarra }) => {
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
            {/* <link rel='stylesheet' href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&family=Raleway:wght@400;700;900&family=Staatliches&display=swap"  /> */}

         </Head>

         <Header guitarra={guitarra} />

         {children}

         <Footer />
      </>
   );
};

Layout.defaultProps = {
   guitarra: null,
};

export default Layout;
