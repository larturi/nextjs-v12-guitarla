import { useContext } from 'react';
import CarritoContext from '../context/CarritoContext';

const useCarrito = () => useContext(CarritoContext);

export default useCarrito;
