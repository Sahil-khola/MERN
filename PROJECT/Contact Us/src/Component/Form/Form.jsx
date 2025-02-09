import React, { useState } from "react";
import style from "./Form.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  function onSubmit(event) {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(text);
  }
  return (
    <section className={style.container}>
      <div className={style.formContainer}>
        <div className={style.buttons}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={20} />} />
          <Button text="VIA CALL" icon={<IoCall fontSize={20} />} />
        </div>
        <Button
          text="VIA EMAIL FORM"
          isSecondary={true}
          icon={<HiMail fontSize={20} />}
        />
        <form onSubmit={onSubmit}>
          <div className={style.inputContainer}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Text"
              rows="8"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={style.image}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default Form;
