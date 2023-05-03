import Head from "next/head";
import { BuyerContext, DistpatchContext } from "@/contexts/buyerContext";
import { useContext } from "react";
import styles from "./Home.module.css";
import BuyersList from "@/components/BuyersList";
import React from "react";
import { Checkbox, Input, InputNumber } from "antd";
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
  function submitted(e) {
    e.preventDefault();
    console.log("PREVENTED");
  }
  const dispatch = useContext(DistpatchContext);

  function handleSubmit(e) {
    e.preventDefault();
    // Stores the form data in a variable
    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      checkbox: e.target.elements.checkbox.checked,
    };

    // Dispatches the action with the formData as the payload. This is to make sure that it happens before the data is submitted to Supabase, so the newly entered formData is send aswel.
    dispatch({
      action: "MERGE_CONTACT_INFO",
      payload: formData,
    });
    // Spreads out the ...query and the ...formData and merges them together without manually copying each field. buyersList is a json object.
    const payload = {
      ...query,
      ...formData,
      buyersList: query.buyersList,

      // name: query.name,
      // email: query.email,
      // phone: query.phone,
      // price: query.price,
      // size: query.minSize,
      // zip: query.zipCode,
      // propertyType: query.propertyType,
      // consent: query.checkbox,
      // buyersList: query.buyersList,
    };

    console.log(payload);
    fetch("/api/addData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
        <Input className="inputs" name="name" required />
      </label>
      <label>
        <span className={styles.label}>E-mail</span>
        <Input className="inputs" name="email" required type="email" />
      </label>
      <label>
        <span className={styles.label}>Phone number</span>
        <InputNumber
          className="inputs"
          name="phone"
          required
          type="tel"
          maxLength={8}
        />
      </label>
      <Checkbox className={styles.checkBox} name="checkbox" />
      <button onSubmit={submitted} className={styles.button} type="submit">
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
