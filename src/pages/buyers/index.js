import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import Buyer from "@/components/Header/Buyer";
export default function Buyers({ data }) {
  const { query } = useRouter();
  console.log(data);

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Potential buyers</h1>

        <div className={styles.content}>
          <h2>Query params:</h2>
          <pre>
            <code>{JSON.stringify(query, null, 2)}</code>
          </pre>

          <section className="buyerContainer">
            {data.map((buyer) => (
              <Buyer key={data.id} {...buyer} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("context", context);
  const api = `http://localhost:3000/api/find-buyers?price=${context.query.price}&propertySize=${context.query.minSize}&zipCode=${context.query.zipCode}&propertyType=${context.query.propertyType}`;
  const res = await fetch(api);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
