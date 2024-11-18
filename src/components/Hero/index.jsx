import React from "react";

import Section from "../Section";
import homepage from "../../../homepage";

const Hero = () => {
  const { hero } = homepage;

  return (
    <>
      <section className="flex-col justify-center text-center items-start gap-32 flex-1">
        <div className="self-stretch flex-col justify-center items-center flex">
          <h1 className="flex-grow-0 self-center dark:bg-gradient-to-r dark:from-indigo-50 dark:to-primary-300 dark:bg-clip-text text-neutral-800 text-3xl font-medium dark:text-transparent lg:text-6xl lg:leading-normal tracking-tight mb-0">
            {hero.title}
          </h1>
          <p className="lg:max-w-[65ch] text-center text-neutral-700 dark:text-white/85 lg:text-lg font-normal leading-snug">
            {hero.subtitle}
          </p>
        </div>
      </section>
      <Section cards={hero.cards} cardsClassname="hero-card" />
    </>
  );
};

export default Hero;
