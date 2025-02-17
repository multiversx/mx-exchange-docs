import React from "react";

import Section from "../Section";
import homepage from "../../../homepage";

const Hero = () => {
  const { hero } = homepage;

  return (
    <section className="flex flex-col justify-center items-center">
      <section className="flex-col justify-center text-center items-start flex-1 mb-8 mt-8">
        <div className="self-stretch flex-col justify-center items-center flex">
          <h1 className="flex-grow-0 self-center dark:bg-gradient-to-r dark:from-indigo-50 dark:to-primary-300 dark:bg-clip-text text-neutral-800 text-5xl font-medium dark:text-transparent lg:text-6xl lg:leading-normal tracking-tight mb-0">
            {hero.title}
          </h1>
        </div>
      </section>
      <Section cards={hero.cards} cardsClassname="hero-card" />
      <img 
        src="img/theme/bg-dark.png"
        alt="xExchange Energy"
        className="absolute w-[200dvw] max-w-none sm:w-full h-auto -z-10 top-0 left-auto right-auto"
      />
    </section>
  );
};

export default Hero;
