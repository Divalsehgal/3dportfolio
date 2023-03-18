import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { projects } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { github } from "../assets";
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work </p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        projects I'm a skilled software developer with experience in TypeScript
        and JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({
  index,
  description,
  tags,
  name,
  source_code_link,
  image,
}) => {
  return (
    <motion.div
      className=""
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div
          className=" relative w-full h-[230px]
   "
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img
            src={image}
            alt="web-development"
            className="object-cover rounded-2xl w-full h-full"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="rounded-full cursor-pointer flex justify-center items-center black-gradient w-10 h-10"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img src={github} className="h-1/2 w-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-white font-bold text-[24px]">{name}</h2>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>


        <div className="mt-4 flex flex-wrap gap-2">{
          tags.map((tag,index)=>{
          return <p className={`text-[14px] ${tag.color}`} key={`${tag.name}-${index}`}>#{tag.name}</p>
          })
        }</div>
      </Tilt>

    </motion.div>
  );
};
export default SectionWrapper(Works, "work");

// export default About
