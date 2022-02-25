import Link from 'next/link';
import Image from 'next/image';
import { formatearFecha } from '../helpers';

const Entrada = ({ entrada }) => {
  
  const { titulo, resumen, imagen, published_at, id } = entrada;
  return (
    <article>
        <Image 
            width={800}
            height={600}
            layout='responsive'
            src={imagen.url} 
            alt={`Imagen Blog ${titulo}`} 
        />

        <div>
            <h1>{titulo}</h1>
            <p>{formatearFecha(published_at)}</p>
            <p>{resumen}</p>
            <Link href={`/blog/${id}`}>
                <a>Leer más</a>
            </Link>
        </div>
    </article>
  )
}


export default Entrada