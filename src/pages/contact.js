import Head from "next/head";
import { useRouter } from "next/router";
import { BuyerContext, DistpatchContext } from "@/contexts/buyerContext";
import { useContext } from "react";
import styles from "./Home.module.css";
import BuyersList from "@/components/BuyersList";

export default function Buyers() {
  const state = useContext(BuyerContext);
  const query = useContext(BuyerContext);

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>

      <div className="wrapper">
        <h1 className={styles.headline}>Contact Info</h1>
        <div className={styles.content}>
          {/*         <pre>{JSON.stringify({ ...state, ...query }, null, 2)}</pre> */}
          <div className="refList">
            <ContactForm {...query} {...state} />
            <BuyersList />
          </div>
          <div className="contactForm"></div>
        </div>
      </div>
    </>
  );
}

export function ContactForm(query) {
  const dispatch = useContext(DistpatchContext);
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ form: e.target, query });
    dispatch({
      action: "MERGE_CONTACT_INFO",
      payload: {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        phone: e.target.elements.phone.value,
        checkbox: e.target.elements.checkbox.checked,
      },
    });
  }
  return (
    <form
      /* action="/buyers" */
      method="GET"
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <label>
        <span className={styles.label}>Name</span>
        <input name="name" required />
      </label>
      <label>
        <span className={styles.label}>E-mail</span>
        <input name="email" required type="email" />
      </label>
      <label>
        <span className={styles.label}>Phone number</span>
        <input name="phone" required type="tel" maxLength={8} />
      </label>
      <input className="checkBox" name="checkbox" type="checkbox"></input>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
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
