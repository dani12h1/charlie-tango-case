import Head from "next/head";
import styles from "./Home.module.css";
import { estateTypes } from "@/data/estateTypes";
import React from "react";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
} from "antd";

const onChange = (value) => {
  console.log("changed", value);
};

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
  return (
    <form action="/buyers" method="GET" className={styles.form}>
      <label>
        <span className={styles.label}>Price</span>
        <InputNumber
          name="price"
          className={styles.price}
          defaultValue={1000}
          formatter={(value) =>
            `DKK ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
          }
          parser={(value) =>
            value.replace(/DKK\s?|(\.*)/g, "").replace(".", ",")
          }
          onChange={onChange}
        />
      </label>
      <label>
        <span className={styles.label}>Size in square metres</span>
        <Input name="minSize" required />
      </label>
      <label>
        <span className={styles.label}>Zip Code</span>
        <Input name="zipCode" required />
      </label>
      <label>
        <span className={styles.label}>Property type</span>
        <Select
          className={styles.select}
          name="propertyType"
          placeholder="Please choose..."
        >
          {estateTypes.map((estate) => (
            <Select.Option key={estate.id} value={estate.id}>
              {estate.name}
            </Select.Option>
          ))}
        </Select>
      </label>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}
