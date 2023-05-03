import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";
import Buyer from "@/components/Buyer";
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
      payload: { ...query },
    });
  }, [dispatch, query]);

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <div className="buyerList"></div>
        <h1 className={styles.headline}>Potential buyers</h1>

        <div className={styles.content}>
          {/*           <h2>Query params:</h2>
          <pre>
            <code>{JSON.stringify({ ...state, ...query }, null, 2)}</code>
          </pre> */}

          <section className="buyerContainer">
            {data.map((buyer) => (
              <Buyer key={data.id} {...buyer} />
            ))}
            <Link className={styles.buttonContainer} href="/contact">
              <button className={styles.button}>
                Proceed ({buyersList.length})
              </button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const api = `https://charlie-tango-case-oj89.vercel.app/api/find-buyers?price=${context.query.price}&propertySize=${context.query.minSize}&zipCode=${context.query.zipCode}&propertyType=${context.query.propertyType}`;
  const res = await fetch(api);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
