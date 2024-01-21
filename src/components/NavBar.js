import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from './Icons';

import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <button
        className=" flex-col justify-center items-center p-1.5 hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark  transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm  ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5  rounded-sm my-0.5 ${
            isOpen ? 'w-0 ' : 'opacity-100 w-6'
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm  ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-center items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="m-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/obadea0"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 dark:fill-light"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/obadea"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="www.linkedin.com/in/obadea"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 dark:bg-light rounded-full"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3   "
          >
            <DribbbleIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
          `}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
