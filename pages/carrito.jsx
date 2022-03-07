import Layout from "../components/Layout";
import Image from "next/image";
import styles from '../styles/Carrito.module.css';

const Carrito = ({carrito}) => {

  console.log(carrito);

  return (
    <Layout pagina={'Carrito de Compras'}>
        <h1 className="heading">Carrito</h1>
        <main className={`${styles.contenido} contenedor`}>
            <div className={styles.carrito}>
                {carrito.length === 0 ? (
                    <div className={styles.vacio}>
                        <h2>No hay productos en el carrito</h2>
                        <p>Agrega productos al carrito para poder comprarlos</p>
                    </div>
                ) : (
                  carrito.map( producto => (
                    <div key={producto.id} className={styles.producto}>
                        <div>
                          <Image 
                            layout="responsive"
                            width={160}
                            height={360}
                            src={producto.imagen}
                            alt={producto.nombre}
                          />
                        </div>

                        <div>
                          <p className={styles.nombre}>{producto.nombre}</p>
                          <p className={styles.cantidad}>{producto.cantidad}</p>
                          <p className={styles.precio}><span>${producto.precio}</span></p>
                          <p className={styles.subtotal}>Subtotal: $ <span>{producto.precio * producto.cantidad}</span></p>
                        </div>
                    </div>
                ))
              )}
            </div>
            <div>
                2
            </div>
        </main>    
    </Layout>
  )
}

export default Carrito;

