import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constant";
import { SectionWrapper } from "./hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
const Experience = () => {
  return (
    <div className={`${styles.sectionHeadText}`}>
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What i have done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience </h2>
        </motion.div>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((exp, index) => {
              return <ExperienceCard {...exp} key={index} index={index} />;
            })}
          </VerticalTimeline>
        </div>
      </>
    </div>
  );
};

const ExperienceCard = (props) => {
  const { points, title, date, iconBg, company_name, icon } = props;
  return (
    
      <VerticalTimelineElement
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        date={date}
        contentArrowStyle={{ border: "7px solid #23231" }}
        iconStyle={{ background: iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              className="h-[60%] w-[60%] object-contain"
              src={icon}
              alt={company_name}
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[24px] font-bold"> {title}</h3>
          <p className="text-secondary text-[16px] font-semibold">
            {company_name}
          </p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {points.map((p, i) => {
            return (
              <li
                className="text-white-100 text-[14px] pl-1 tracking-wider"
                key={`${p}-${i}`}
              >
                {p}
              </li>
            );
          })}
        </ul>
      </VerticalTimelineElement>
  );
};

export default SectionWrapper(Experience, "experience");
