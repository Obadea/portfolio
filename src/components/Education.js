import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>

        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:md-16 ">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Online Coursework"
            time="2021-Present"
            place="Udemy, Coursera, Sololearn"
            info="Completed coursework in advanced topics such as Frontend Development, Responsive Design, and User Interface (UI) Engineering. Acquired skills in creating visually appealing and interactive web interfaces, ensuring a seamless user experience across various devices."
          />

          <Details
            type="Germane International"
            time="2021-Present"
            place="Lagos State, Nigeria"
            info="Acquired comprehensive career development skills through focused coursework on Chegg, delving into leadership principles, time management strategies, emotional intelligence, and critical thinking techniques. Engaged in practical learning experiences that extended beyond theoretical concepts, fostering a deep understanding of how to navigate and excel in professional settings. These skills contribute to a well-rounded foundation for personal and career growth, showcasing the ability to lead, manage time effectively, understand emotions, and think critically in various scenarios."
          />

          <Details
            type="Career Development"
            time="2022-Present"
            place="Chegg"
            info="Completed intensive coursework in advanced frontend development topics, gaining hands-on experience in understanding the intricacies of the web, setting environment variables, implementing algorithms, and creating flowcharts. Effectively applied theoretical knowledge to solve real-world problems, acquiring practical skills that go beyond online learning. Explored the nuances of frontend engineering through physical engagement, contributing to a deeper understanding of how to build robust and efficient web applications."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
