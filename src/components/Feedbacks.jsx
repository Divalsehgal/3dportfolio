import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc/index";
import { testimonials } from "../constant";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((test, index) => {
          return (
            <FeedBackCard
              key={`${test?.name}-${index}`}
              {...test}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

const FeedBackCard = ({
  testimonial,
  name,
  designation,
  image,
  company,
  index,
}) => {
  return (
    <motion.div
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full "
      variants={fadeIn("", "spring", 0.5 * index, 0.75)}
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex flex-col flex-1">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img src={image} className="w-10 h-10 rounded-full object-cover" alt={`feedback-by-${name}`} />
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Feedbacks, "feedback");
