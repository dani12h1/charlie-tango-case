import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import Anchor from "@/components/Header/Anchor";
import Home from "..";
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

          {data.map((buyer) => (
            <Buyer key={data.id} {...buyer} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const api = "http://localhost:3002/api/find-buyers";
  const res = await fetch(api);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
