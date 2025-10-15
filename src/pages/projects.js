import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { items } from "../components/data";
import TransitionEffect from "@/components/TransitionEffect";
import Slider from "@/components/Slider";
const FramerImage = motion(Image);

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full display flex flex-col items-center justify-center rounded-2xl shadow-2xl   bg-light p-6 dark:bg-dark dark:border-light col-span-6 xs:p-4 sm:col-span-12 ">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between m-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark truncate w-full lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2m w-full text-left text-2xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = [
    "Latest",
    "UI/UX Focus",
    "React",
    "JavaScript",
    "Nextjs",
    "TypeScript",
    "Full Stack",
  ];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  return (
    <>
      <Head>
        <title>Obadea | Projects Page</title>
        <meta name="description" content="Obadiah Projects" />
      </Head>
      <TransitionEffect />

      <main className="w-full mb-16 flex-col items-center justify-center dark:text-light overflow-x-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className=" flex justify-end mb-10 mt-4 sm:justify-center text-[0.9rem] uxs:grid uxs:grid-cols-3 uxs:text-[0.5rem]">
            {filters.map((category, idx) => (
              <button
                onClick={() => handleFilterButtonClick(category)}
                className={`filter__button ${
                  selectedFilters?.includes(category)
                    ? "bg-dark text-light dark:bg-light dark:text-dark "
                    : ""
                }`}
                key={`filters-${idx}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 z-10">
              <Slider className="z-100" />
            </div>

            {filteredItems.map((item, idx) => (
              <Project
                key={`items-${idx}`}
                title={item.title}
                link={`${item.link}`}
                img={item.img}
                type={`${item.type}`}
                github={`${item.github}`}
              />
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
