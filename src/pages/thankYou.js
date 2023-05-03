import Head from "next/head";
import { BuyerContext, DistpatchContext } from "@/contexts/buyerContext";
import { useContext } from "react";
import styles from "./Home.module.css";
import BuyersList from "@/components/BuyersList";
import React from "react";
import { Checkbox, Input, InputNumber } from "antd";
import Link from "next/link";
export default function Buyers() {
  const state = useContext(BuyerContext);
  const query = useContext(BuyerContext);
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>

      <div className="wrapper">
        <h1 className={styles.headline}>Thank you!</h1>
        <div className={styles.content}>
          <h2 className="thankyouh2">Thank you for your inquiry!</h2>
          <h3 className="thankyouh3">
            We will contact you shortly with further information about a
            non-binding sales assessment.
          </h3>
        </div>
      </div>
    </>
  );
}
