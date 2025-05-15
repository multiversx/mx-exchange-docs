import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import ExternalIcon from "./external.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export const SectionLink = ({ text = "", link, className }) => {
  return (
    <Link
      to={link}
      className={clsx(
        "link text-primary-1000 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-200 text-base font-normal leading-normal gap-2 inline-flex justify-center items-center hover:no-underline",
        className
      )}
    >
      {text}
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className="text-neutral-300 dark:text-primary-400 text-xs"
      />
    </Link>
  );
};
