import Head from "next/head";
import styles from "./Home.module.css";
import { estateTypes } from "@/data/estateTypes";
import React from "react";
import { useState } from "react";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Find a buyer</h1>

        <div className={styles.content}>
          <h2>Estate infomation</h2>
          <p>Insert your estate information to find a match</p>

          <SellerEstateForm />
        </div>
      </div>
    </>
  );
}

export function SellerEstateForm() {
  const [rawPrice, setRawPrice] = useState(750000);
  const [rawSize, setRawSize] = useState(120);
  function onChangeSize(value) {
    setRawSize(value);
    // Pass the rawValue to the parent component
  }
  function onChange(value) {
    setRawPrice(value);
    // Pass the rawValue to the parent component
  }
  return (
    <form action="/buyers" method="GET" className={styles.form}>
      <input type="hidden" name="price" value={rawPrice}></input>
      <input type="hidden" name="minSize" value={rawSize}></input>
      <label>
        <span className={styles.label}>Price</span>
        <InputNumber
          className="inputs"
          defaultValue={750000}
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
        <InputNumber
          className="inputs"
          defaultValue={120}
          formatter={(value) =>
            `m² ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
          }
          parser={(value) =>
            value.replace(/m²\s?|(\.*)/g, "").replace(".", ",")
          }
          onChange={onChangeSize}
        />
      </label>
      <label>
        <span className={styles.label}>Zip Code</span>
        <Input className="inputs" name="zipCode" required />
      </label>
      <label>
        <span className={styles.label}>Property type</span>
        <Select
          className="inputs"
          id="selectInput"
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
