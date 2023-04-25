import Head from "next/head";
import styles from "./Home.module.css";
import EstOption from "@/components/Header/EstateOpt";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Hello MMD</h1>
        <div className={styles.content}>
          <p>
            To get started, edit <code>pages/index.js</code> and save to reload.
          </p>
        </div>
        <div className={styles.content}>
          <h2>Basic form example</h2>
          <p>
            This is simple example of how you could submit a form to another
            page in Next.js, without using a custom <code>submit</code> function
            (e.g. without JavaScript). It is unstyled and unfinished. You can
            use this as base, or implement your own solution.
          </p>
          <p>
            Make sure to read the guide on{" "}
            <a
              href="https://nextjs.org/docs/guides/building-forms"
              target="_blank"
            >
              building forms in Next.js
            </a>
          </p>
          <SellerEstateForm />
        </div>
      </div>
    </>
  );
}

export function SellerEstateForm() {
  const [sellerPropertyInfo, setSellerPropertyInfo] = useState([]);
  /* function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("./buyers", { method: form.method });

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    setSellerPropertyInfo((old) => old.push(formJson));

    console.log("useState", sellerPropertyInfo);
  } */

  return (
    <form
      action="/buyers"
      method="GET"
      className={styles.form}
      /*    onSubmit={handleSubmit} */
    >
      <label>
        <span className={styles.label}>Price</span>
        <input name="price" required type="number" />
      </label>
      <label>
        <span className={styles.label}>Size in square metres</span>
        <input name="propertySize" required></input>
      </label>
      <label>
        <span className={styles.label}>Zip Code</span>
        <input name="zipCode" required />
      </label>
      <label>
        <span className={styles.label}>Property type</span>
        <select name="propertyType">
          <option value="">Please choose...</option>
          <EstOption />
        </select>
      </label>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}
