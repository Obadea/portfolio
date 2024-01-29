import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';

import article1 from '../../public/images/articles/flexbox.png';
import article2 from '../../public/images/articles/poster-app-design-case-study-tubik.jpg';
import article3 from '../../public/images/articles/frontendTools.png';
import article4 from '../../public/images/articles/typography.png';
import article5 from '../../public/images/articles/snippets.jpg';
import article6 from '../../public/images/articles/optimization.jpeg';
import article7 from '../../public/images/articles/javaScriptreference.jpg';
import article8 from '../../public/images/articles/JavaScript-DOM-Tips-and-Tricks.png';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline sm:text-sm ">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        whileInView={{ opacity: 1, trasiction: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        initial={{ opacity: 0 }}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, link, date }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, trasition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-light dark:text-light"></div>

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden inline-block rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold mt-4 my-2 hover:underline xs:text-lg">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary dark:text-primaryDark font-semibold">
          {time}
        </span>
      </Link>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Obadea | Articles Page</title>
        <meta name="description" content="Obadiah Articles" />
      </Head>

      <TransitionEffect />

      <main class="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 ">
            <FeaturedArticle
              title="An Interactive Guide to Flexbox"
              summary="When we truly learn the secrets of the Flexbox layout mode, we can build absolutely incredible things. Fluid layouts that stretch and shrink without arbitrary breakpoints. In this action-packed…"
              link="https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/?ref=refind"
              time="1 hr read"
              img={article1}
            />

            <FeaturedArticle
              title="10 UI Design Trends We Start 2024 With"
              summary="Check a brief review of some hot UI design trends for web and mobile, packed with a massive bunch of UI/UX design examples by the tubik team."
              time="1+ hr read"
              link="https://blog.tubikstudio.com/ui-design-trends-2024/"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Top Front-End Tools Of 2023"
              img={article3}
              date="January 26, 2024"
              link="https://www.smashingmagazine.com/2024/01/top-frontend-tools-2023/"
            />

            <Article
              title="A Pocket Guide to Typography"
              img={article4}
              date="January 27, 2024"
              link="http://www.typogui.de/"
            />

            <Article
              title="5 CSS snippets every front-end developer should know in 2024"
              img={article5}
              date="January 27, 2024"
              link="https://web.dev/articles/5-css-snippets-every-front-end-developer-should-know-in-2024"
            />

            <Article
              title="A Beginner’s Guide to Website Speed Optimization"
              img={article6}
              date="January 28, 2024"
              link="https://kinsta.com/learn/page-speed/"
            />

            <Article
              title="JavaScript Reference by MDN"
              img={article7}
              date="January 28, 2024"
              link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
            />

            <Article
              title="DOM Manipulation Reference
              "
              img={article8}
              date="January 28, 2024"
              link="https://youmightnotneedjquery.com/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
