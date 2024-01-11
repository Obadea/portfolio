import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <Skill name="Web" />
        <Skill name="HTML5" x="-20vw" y="2vw" />
        <Skill name="CSS3" x="-19vw" y="-12vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="Web Design" x="32vw" y="-5vw" />
        <Skill name="NextJS" x="0vw" y="-20vw" />
        <Skill name="Figma" x="-3vw" y="-13vw" />
        <Skill name="Version Control/Git" x="15vw" y="18vw" />
        <Skill name="Tailwind CSSx" x="18vw" y="-12vw" />
      </div>
    </>
  );
};

export default Skills;
