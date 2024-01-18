import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import project1 from "../../public/images/projects/carHub.jpeg";
import project2 from "../../public/images/projects/Clipboard.jpeg";

import { motion } from "framer-motion";
const FramerImage = motion(Image);
import { items } from "../components/data";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center rounded-br-2xl justify-between rounded-3xl bg-light shadow-2xl p-12 dark:bg-dark dark:shadow-3xl col-span-12">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full display flex flex-col items-center justify-center rounded-2xl shadow-2xl bg-light p-6 dark:bg-dark dark:border-light col-span-6">
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
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2m w-full text-left text-2xl font-bold ">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["Latest", "UI/UX Focus", "React", "JavaScript", "Nextjs"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

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

  return (
    <>
      <Head>
        <title>Obadea | Projects Page</title>
        <meta name="description" content="Obadiah's Project" />
      </Head>
      <main className="w-full mb-16 flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className=" flex justify-end mb-10 ">
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

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Car ShowCase Application"
                summary="The Car Search Web App (CarHub) is a dynamic and user-friendly application that simplifies the process of finding detailed information about cars, including their model, year of manufacture, fuel type, and daily rental prices. This app caters to users who are looking for specific details about cars for potential rental."
                link="https://obadea-cars-showcase.vercel.app/"
                img={project1}
                type="Featured Project"
                github="https://github.com/Obadea/obadea_cars_showcase"
              />
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

            {/* <Project
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
               It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
               local currency."
              link="/"
              img={project1}
              type="Featured Project"
              github="/"
            /> */}

            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                img={project1}
                type="Featured Project"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
