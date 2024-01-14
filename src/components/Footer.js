import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import goUpIcon from "../../public/images/svgs/triangleUp.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Right Reserved.</span>
        <div className="flex items-center">
          Built With{" "}
          <span className="text-primary dark:text-primaryDark text-3xl px-1">
            {" "}
            &#9825;
          </span>{" "}
          by&nbsp;
          <Link
            href="https://twitter.com/obadea0"
            className="underline underline-offset-2"
            target="_blank"
          >
            {" "}
            Obadea
          </Link>
        </div>
        <Link
          href="https://twitter.com/obadea0"
          target="_blank"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
        <div className="w-8 bg-dark rounded-[4px]  px-2.5 py-2 cursor-pointer">
          <Image src={goUpIcon} alt="go up" />
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
