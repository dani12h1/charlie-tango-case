import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import Buyer from "@/components/Header/Buyer";
import { useEffect } from "react";
import { BuyerContext, DistpatchContext } from "@/contexts/buyerContext";
import { useContext } from "react";

export default function Buyers({ data }) {
  const dispatch = useContext(DistpatchContext);
  const { query } = useRouter();
  const { buyersList } = useContext(BuyerContext);
  useEffect(() => {
    //dispatch
    dispatch({
      action: "SET_ESTATE_INFO",
      payload: query,
    });
  });

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
          <Link href="/contact">
            <button>Proceed ({buyersList.length})</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const api = `http://localhost:3000/api/find-buyers?price=${context.query.price}&propertySize=${context.query.minSize}&zipCode=${context.query.zipCode}&propertyType=${context.query.propertyType}`;
  const res = await fetch(api);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
