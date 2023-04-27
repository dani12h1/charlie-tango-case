import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BuyerContext } from "@/contexts/buyerContext";
import { useContext } from "react";
import BuyersList from "@/components/Header/BuyersList";

export default function Buyers({ data }) {
  const state = useContext(BuyerContext);
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <pre>{JSON.stringify(state, null, 2)}</pre>
        <BuyersList />
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
