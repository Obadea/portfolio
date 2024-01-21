import React from 'react';
import Layout from './Layout';
import Link from 'next/link';
// import goUpIcon from "../../public/images/svgs/triangleUp.svg";

// import goUpIcon from '../../public/images/svgs/goupArrow.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Right Reserved.</span>
        <div className="flex items-center">
          Built With{' '}
          <span className="text-primary dark:text-primaryDark text-3xl px-1">
            {' '}
            &#9825;
          </span>{' '}
          by&nbsp;
          <Link
            href="https://twitter.com/obadea0"
            className="underline underline-offset-2"
            target="_blank"
          >
            {' '}
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
        <div>
          {/* <Image src={goUpIcon} alt="go up" /> */}
          <svg
            class="with-icon_icon__MHUeb"
            data-testid="geist-icon"
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 12l-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
