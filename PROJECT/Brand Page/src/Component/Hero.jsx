import React from "react";
import style from "../Component/Hero.module.css";
const HeroSection = () => {
  return (
    <main className={style.main}>
      <div className={style.content}>
        <h1>Your Feet Deserve the Best</h1>
        <p>
          Your feet deserve the best, and we're here to help you with our shoes.
        </p>
        <div className={style.buttons}>
          <button className={style.shopNowButton}>Shop Now</button>
          <button className={style.categoryButton}>Category</button>
        </div>
        <div className={style.shopping}>
          <p>Also Available On</p>
          <div className={style.icons}>
            <img src="/Images/amazon.png" alt="Amazon Icon" />
            <img src="/Images/flipkart.png" alt="Flipkart Icon" />
          </div>
        </div>
      </div>
      <div className={style.image}>
        <img src="/Images/hero-image.png" alt="Shoes" />
      </div>
    </main>
  );
};

export default HeroSection;
