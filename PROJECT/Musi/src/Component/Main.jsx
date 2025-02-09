import React from "react";
import style from "./Main.module.css";

const Main = () => {
  return (
    <div>
      <main className={style.main}>
        <div className={style.container}>
          <div className={style.hero}>
            <h1>Navigating the digital landscape for success</h1>
            <p>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button>Book a consultation</button>
          </div>
          <div className={style.image}>
            <img src="contact.svg" alt="" />
          </div>
        </div>

        <div className={style.brands}>
          <ul>
            <li>
              <img src="" alt="Amazon " />
            </li>
            <li>
              <img src="" alt="Dribbble " />
            </li>
            <li>
              <img src="" alt="HubSpot " />
            </li>
            <li>
              <img src="" alt="Notion " />
            </li>
            <li>
              <img src="" alt="Netflix " />
            </li>
            <li>
              <img src="" alt="Zoom " />
            </li>
          </ul>
        </div>

        <section className={style.services}>
          <h1>Services</h1>
          <p>At our digital marketing agency, we offer a variety of services tailored to meet your needs:</p>
         
        </section>
      </main>
    </div>
  );
};

export default Main;
