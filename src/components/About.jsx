import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import {SectionWrapper} from "./hoc";
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServicesCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const ServicesCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div
        className="green-pink-gradient p-[1px] rounded-[20px] w-full shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 1)}
      >

        <div
          className=" bg-tertiary py-5 px-12 
    rounded-[20px] flex flex-col justify-evenly items-center min-h-[280px]"
          options={{ max: 45, scale: 1, speed: 450 }}
        >
     
     <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        </div>
      </motion.div>
    </Tilt>



  );
};
 export default SectionWrapper(About,"about");

// export default About
