const EntradaBlog = ({ entrada }) => {

    console.log(entrada);

  return (
    <div>EntradaBlog</div>
  )
}

export async function getServerSideProps({ query: { id } }) {

    const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`;
    const response = await fetch(url);
    const entrada = await response.json();

    return  {
        props: {
            entrada
        }
    }
}

export default EntradaBlog;