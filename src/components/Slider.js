import { GithubIcon } from '@/components/Icons';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import project1 from '../../public/images/projects/carHub.jpeg';
import project4 from '../../public/images/projects/gpt-3.jpeg';
import project8 from '../../public/images/projects/metaVerse.jpeg';
import project6 from '../../public/images/projects/portfolio.jpeg';
import project5 from '../../public/images/projects/promptopia.jpeg';
import project7 from '../../public/images/projects/forkify.jpeg';
import project11 from '../../public/images/projects/aiSummarizer.jpeg';

import { motion } from 'framer-motion';
const FramerImage = motion(Image);

//
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper/modules';
//
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center rounded-br-2xl justify-between rounded-3xl bg-light shadow-2xl p-12 dark:bg-dark dark:shadow-3xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 cursor-grab sm:min-h-[38rem] lg:min-h-[50rem]">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
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

      <div className="w-1/2 flex flex-col items-start justify-between pl-6  lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className=" text-left my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base

            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial width on component mount
    setWindowWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        cssMode={false}
        navigation={windowWidth > 1500 ? true : false}
        pagination={true}
        mousewheel={false}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        autoplay={true}
        className="mySwiper swiper "
      >
        {/* Featured Project 1 */}
        <SwiperSlide className="swiper-slide ">
          <FeaturedProject
            title="Car ShowCase Application"
            summary="The Car Search Web App (CarHub) is a dynamic and user-friendly application that simplifies the process of finding detailed information about cars, including their model, year of manufacture, fuel type, and daily rental prices. This app caters to users who are looking for specific details about cars for potential rental."
            link="https://obadea-cars-showcase.vercel.app/"
            img={project1}
            type="Featured Project"
            github="https://github.com/Obadea/obadea_cars_showcase"
          />
        </SwiperSlide>

        {/* Featured Project 2 */}
        <SwiperSlide className="swiper-slide">
          <FeaturedProject
            title="GPT-3"
            summary="A stunning and responsive web application built with React. This website showcases the powerful capabilities of the GPT-3 language model in a user-friendly and aesthetically pleasing design."
            link="https://gpt-3-rv4.pages.dev/"
            img={project4}
            type="Featured Project"
            github="https://github.com/Obadea/GPT-3"
          />
        </SwiperSlide>

        {/* Featured Project 3 */}
        <SwiperSlide className="swiper-slide">
          <FeaturedProject
            title="Forkify"
            summary="Forkify is a web application designed to assist users in finding, storing, and cooking recipes. Developed with modern web technologies, Forkify offers a user-friendly interface where users can search for recipes by entering keywords or ingredients. Upon finding a recipe of interest, users can view its details, including ingredients, cooking instructions, and nutritional information."
            link="https://forkify-test.pages.dev/"
            img={project7}
            type="Featured Project"
            github="https://github.com/Obadea/Forkify"
          />
        </SwiperSlide>

        {/* Featured Project 4 */}
        <SwiperSlide className="swiper-slide">
          <FeaturedProject
            title="Obadiah's Portfolio"
            summary="This portfolio showcases my diverse skill set, featuring a collection of projects that demonstrate my proficiency in web development and other technologies. Explore my work, learn about my skills, read articles and get to know me better through the provided contact details. I look forward to connecting with you and discussing potential collaborations or opportunities. Thank you for visiting!"
            link="https://portfolio-obadeas-projects.vercel.app/"
            img={project6}
            type="Featured Project"
            github="https://github.com/Obadea/portfolio"
          />
        </SwiperSlide>

        {/* Featured Project 5 */}
        <SwiperSlide className="swiper-slide">
          <FeaturedProject
            title="Promptopia"
            summary="A social app where creativity flourishes! Share, discover, and engage with prompts created by users. Express your imagination, edit your prompts, and dive into a world of endless inspiration."
            link="https://promptopia-obadea.vercel.app/"
            img={project5}
            type="Featured Project"
            github="https://github.com/Obadea/promptopia"
          />
        </SwiperSlide>

        {/* Featured Project 6 */}
        <SwiperSlide className="swiper-slide">
          <FeaturedProject
            title="Ai Summarizer"
            summary="An intelligent AI app to summarize website articles involves using advanced natural language processing techniques. This AI analyzes the content from the provided link, extracting key information and employing sophisticated summarization methods. Whether through rephrasing or selecting essential sentences, the AI distills the article into a short and clear summary."
            link="https://obadea-ai-summarizer.pages.dev/"
            img={project11}
            type="Featured Project"
            github="https://github.com/Obadea/Ai-summarizer"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
