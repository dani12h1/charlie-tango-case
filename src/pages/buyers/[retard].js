export default function Product({ product }) {
  return (
    <>
      <div>{product.productdisplayname}</div>
      <p>{product.agegroup}</p>
    </>
  );
}

export async function getStaticProps(context) {
  console.log(context.params.id);
  const cat = context.params.category;
  const id = context.params.id;
  const api = "https://kea-alt-del.dk/t7/api/products/" + id;
  const res = await fetch(api);
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();
  console.log(data);
  return {
    props: {
      product: data,
    },
  };
}

/* Doing static makes sure it's prerendered and only generated once */
export async function getStaticPaths() {
  const api = "https://kea-alt-del.dk/t7/api/products";
  const res = await fetch(api);
  const data = await res.json();

  const paths = data.map((object) => {
    console.log(object);
    return { params: { id: String(object.id) } };
  });

  return {
    paths,
    fallback: false,
  };
}
