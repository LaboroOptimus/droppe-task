import React, { useState } from "react";
import { Button, Input } from "../../common";
import { FormKeys, initialForm, initialValidate, Form as IForm } from "./types";
import styles from "./Form.module.scss";

const validateFields = (value: string, key: FormKeys) => {
  switch (key) {
    case FormKeys.Title:
      return value.length !== 0;
    case FormKeys.Description:
      return value.length !== 0;
    case FormKeys.Price:
      return value.length !== 0;
  }
};

export const Form: React.FC<IForm> = ({ handleSubmit }) => {
  const [form, setForm] = useState(initialForm);
  const [validate, setValidate] = useState(initialValidate);

  const handleChange = (e: any, key: FormKeys) => {
    const value = e.target.value;
    setForm({
      ...form,
      [key]: value,
    });

    setValidate({
      ...validate,
      [key]: validateFields(value, key),
    });
  };

  const handleClick = () => {
    if (!validate[FormKeys.Title]) {
      alert("Your product needs a title");
      return;
    }

    if (!validate[FormKeys.Description] || !validate[FormKeys.Price]) {
      alert("Your product needs some content");
      return;
    }

    handleSubmit(
      form[FormKeys.Title],
      form[FormKeys.Description],
      form[FormKeys.Price]
    );
    setForm(initialForm);
    setValidate(initialValidate);
  };

  return (
    <>
      <span className={styles.label}>Product title: *</span>
      <Input
        keyId={FormKeys.Title}
        value={form[FormKeys.Title]}
        placeholder="Title..."
        handleChange={handleChange}
        className={styles.input}
      />
      <span className={styles.label}>Product price: *</span>
      <Input
        keyId={FormKeys.Price}
        value={form[FormKeys.Price]}
        handleChange={handleChange}
        placeholder="Price..."
        className={styles.input}
        pattern="[0-9.]+"
        type="number"
      />
      <span className={styles.label}>Product details: *</span>
      <textarea
        value={form[FormKeys.Description]}
        placeholder="Start typing product description here..."
        onChange={(e) => handleChange(e, FormKeys.Description)}
        className={styles.textarea}
      />
      <Button text={"Add a product"} onClick={handleClick} />
    </>
  );
};
