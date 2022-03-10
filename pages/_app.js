/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from 'react';
import CarritoContext from '../context/CarritoContext';

import '../styles/normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const carritoLS = JSON.parse(localStorage.getItem('carrito')) || [];
        setCarrito(carritoLS);
    }, []);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const addCarrito = producto => {
        if (carrito.some(articulo => articulo.id === producto.id)) {
            const carritoActualizado = carrito.map(articulo => {
                if (articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });
            setCarrito(carritoActualizado);
        } else {
            setCarrito([...carrito, producto]);
        }
    };

    const removeCarrito = id => {
        const carritoActualizado = carrito.filter(articulo => articulo.id !== id);
        setCarrito(carritoActualizado);
    };

    const actualizarCantidad = producto => {
        const carritoActualizado = carrito.map(articulo => {
            if (articulo.id === producto.id) {
                articulo.cantidad = producto.cantidad;
            }
            return articulo;
        });

        setCarrito(carritoActualizado);
    }

    const eliminarProductoCarrito = id => {
        removeCarrito(id);
    }

    const carritoData = useMemo(
        () => ({
            carrito,
            addCarrito,
            actualizarCantidad,
            eliminarProductoCarrito,
        }),
        [carrito]
     );

    return ( 
        <CarritoContext.Provider value={carritoData}>
            <Component { ...pageProps } />
        </CarritoContext.Provider>
    );

}

export default MyApp;