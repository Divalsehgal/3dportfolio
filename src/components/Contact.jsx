import React, { useRef, useState } from "react";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "./hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name !== "" && form.email !== "" && form.msg !== "") {
      setLoading(true);
      setTimeout(() => {
        alert("Successfully sent");
        setLoading(false);
        setForm({
          name: "",
          email: "",
          msg: "",
        });
      }, 1000);
    } else {
      alert("Enter fields");
      return;
    }
  };

  return (
    <div className="flex flex-col-reverse xl:flex-row xl:mt-12 gap-10 overflow-hidden">
      <motion.div className="" variants={slideIn("left", "tween", 0.2, 1)}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h1 className={styles.sectionHeadText}> Contact </h1>
        <form
          ref-={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              value={form.name}
              name="name"
              className="bg-teritary py-4 px-6 placeholder:text-secondary text-white 
            border-none rounded-lg outline-none"
              onChange={handleChange}
              placeholder="What's your name ?"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email-Id</span>
            <input
              value={form.email}
              name="email"
              className="bg-teritary py-4 px-6 placeholder:text-secondary text-white 
            border-none rounded-lg outline-none"
              onChange={handleChange}
              placeholder="What's your email ?"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your msg</span>
            <textarea
              rows="7"
              name="msg"
              value={form.msg}
              className="bg-teritary py-4 px-6 placeholder:text-secondary text-white 
            border-none rounded-lg outline-none"
              onChange={handleChange}
              placeholder="What's your msg?"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl w-fit text-white outline-none font-bold shadow-md shadow-primary"
          >
            {isLoading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
