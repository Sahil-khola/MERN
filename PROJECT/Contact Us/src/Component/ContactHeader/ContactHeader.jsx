import React from 'react'
import style from "./ContactHeader.module.css"


const ContactHeader = () => {
  return (
    <div className={style.container}>
      <h1 className={style.contact}>CONTACT US</h1>
      <p className={style.para}>LET'S CONNECT: WE'RE HERE TO HELP,AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION,FEEDBACK,OR JUST WANT TO CHAT,YOU CAN REACH OUT TO US THROUGH THE CONTACT OF THIS PAGE,OR BY PHONE OR EMAIL. WE LOOK FORWARD TO HEARING FROM YOU! </p>
    </div>
  )
}

export default ContactHeader;
