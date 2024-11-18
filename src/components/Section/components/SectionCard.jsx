import React from "react";
import Link from "@docusaurus/Link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export const SectionCard = ({
  title = "",
  text = "",
  link,
  icon,
  isCard = false,
  className,
}) => {
  if (isCard) {
    return (
      <Link
        to={link}
        className={clsx(
          "flex grow h-full w-auto min-h-[196px] p-6 rounded-2xl border border-solid border-white/5 backdrop-blur-[52px] justify-between items-end  hover:no-underline bg-white hover:bg-neutral-25 dark:bg-neutral-850/80  dark:hover:bg-neutral-700/30 transition-all",
          className
        )}
      >
        <div className="grow shrink basis-0 self-stretch rounded-2xl flex-col justify-between items-start inline-flex gap-8">
          <div className="self-stretch flex-col justify-start items-start gap-10 flex">
            <div className="justify-start items-center gap-1 inline-flex">
              <div className="text-neutral-800 dark:text-neutral-25 text-lg font-medium leading-normal">
                {title}
              </div>
              <div className="w-4 h-4 justify-center items-center flex">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-center text-neutral-200 dark:text-neutral-25 text-sm"
                />
              </div>
            </div>
          </div>
          <p className="ms-0 mb-0 self-stretch text-neutral-400 text-sm">
            {text}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={link}
      className={clsx(
        "flex grow h-full p-6 rounded-3xl backdrop-blur-[50px] justify-between items-end hover:no-underline bg-white hover:bg-neutral-25 dark:bg-neutral-850/80 dark:hover:bg-neutral-700/30 transition-all",
        className
      )}
    >
      <div className="grow shrink basis-0 self-stretch rounded-2xl flex-col justify-end items-start inline-flex gap-2">
        <div className="self-stretch flex-col justify-start items-start gap-10 flex">
          {icon && (
            <div className="justify-center items-center inline-flex">
              <FontAwesomeIcon
                icon={icon}
                className="card-icon text-center text-neutral-800 dark:text-neutral-25 text-[32px] font-black"
              />
            </div>
          )}
          <div className="self-stretch justify-start items-center gap-1 inline-flex">
            <div className="text-neutral-800 dark:text-neutral-25 font-medium leading-[21px]">
              {title}
            </div>
            <div className="w-4 h-4 justify-center items-center flex">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-center text-neutral-200 dark:text-neutral-25 text-sm"
              />
            </div>
          </div>
        </div>
        <p className="ms-0 mb-0 text-neutral-400 font-normal text-sm leading-tight line-clamp-2">{text}</p>
      </div>
    </Link>
  );
};
