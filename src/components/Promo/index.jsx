import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import homepage from "../../../homepage";
import "./promo.css";

const Promo = () => {
  const { promo } = homepage;

  return (
    <div className="promo relative h-[706px] rounded-3xl flex-col justify-center items-center gap-32 inline-flex overflow-hidden">
      <video
        id="promo-video"
        loop
        playsInline
        autoPlay
        muted
        className="absolute z-0 inset-0 h-full rounded-3xl"
      >
        <source src="videos/xmex-rotation.mp4" />
        <source src="videos/xmex-rotation.webm" />
      </video>
      <div className="absolute inset-0 z-10 bg-primary-700/75"></div>
      <div className="absolute top-[40px] sm:top-auto sm:bottom-auto z-20 h-[326px] flex-col justify-start items-center lg:gap-14 inline-flex">
        <div className="p-10 flex-col justify-start items-center gap-4 flex rounded-[40px] promo-shadow">
          <div className="h-7 px-[7px] bg-primary-900/10 rounded-[48px] border border-solid border-primary-900/20 backdrop-blur-[6px] justify-center items-center inline-flex">
            <div className="self-stretch px-1.5 justify-center items-center gap-2 flex">
              <div className="text-center text-white/85 text-base font-normal leading-none tracking-tight">
                {promo.tag}
              </div>
            </div>
          </div>
          <div className="text-center text-white font-medium text-[42px] leading-[46px] lg:text-7xl lg:leading-none tracking-tight">
            {promo.title}
          </div>
          <div className="lg:max-w-[75ch] text-center text-white/85 lg:text-[21px] font-normal leading-snug">
            {promo.subtitle}
          </div>
        </div>
        {promo.link && (
          <div className="justify-center items-start gap-2 inline-flex px-5">
            <Link
              to={promo.link}
              className={clsx(
                "text-primary-900 bg-white hover:bg-primary-100 px-3  rounded-xl justify-center items-center flex hover:no-underline"
              )}
            >
              <div className="px-4 py-3 rounded-lg justify-center items-center gap-2 flex">
                <div className="text-center text-gray-950 text-lg font-medium leading-normal">
                  {promo.button}
                </div>
              </div>
              <div className="justify-center items-center flex">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-6 text-center text-gray-950 text-xl font-black"
                />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Promo;
