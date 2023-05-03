import Head from "next/head";
import { BuyerContext } from "@/contexts/buyerContext";
import { useContext } from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import thankYouIMG from "../assets/thankyou.jpeg";

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
          <Image
            className="thankyouImage"
            src={thankYouIMG}
            alt="people smiling and agreeing and having a really good time because they have gotten themselves a house.. You see, these people have been through a lot lately, especially after the COVID pandemic hit and they had to sell their family business."
          ></Image>
        </div>
      </div>
    </>
  );
}
