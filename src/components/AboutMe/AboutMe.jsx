"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { HiMiniCodeBracket } from "react-icons/hi2";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { HiOutlineCloud } from "react-icons/hi2";
import { HiOutlineBriefcase } from "react-icons/hi2";


export default function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-max bg-neutral-800 w-full container max-w-[1000px] rounded-xl p-10 flex flex-col shadow-xl gap-8"
    >
      <div className="flex gap-3 items-center">
        <HiMiniCodeBracket color="#a3e635" size={"24px"} />
        <h3 className="text-lg md:text-xl text-lime-400">ABOUT ME</h3>
      </div>
      <p className="text-neutral-400 text-lg md:text-xl  font-light">
        Passionate about programming. Resilient, competitive, and persistent.{" "}
        <br /> My goal is to put into practice all the knowledge acquired during
        my academic training and be part of a team that allows me to develop
        personally and professionally
      </p>

      <div className="flex gap-3 items-center">
        <HiOutlineBriefcase color="#a3e635" size={"24px"} />
        <h3 className="text-lg md:text-xl text-lime-400">What Im Doing</h3>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly gap-4">
        <motion.article
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-neutral-700 rounded-xl p-5 md:p-10 flex flex-col justify-center items-center gap-3 w-full hover:border-lime-400 transition-all"
        >
          <HiMiniComputerDesktop color="#a3e635" size={"40px"} />
          <h2 className="text-xl md:text-2xl text-lime-400">
            Frontend Development
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-light">
            I focus on creating secure, efficient and attractive web interfaces.
            I write standard and well-documented code for scalable applications,
            prioritizing user experience and security.
          </p>
        </motion.article>
        <motion.article
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-neutral-700 rounded-xl p-5 md:p-10 flex flex-col justify-center items-center gap-3 w-full hover:border-lime-400 transition-all"
        >
          <HiOutlineCloud color="#a3e635" size={"40px"} />
          <h2 className="text-xl md:text-2xl text-lime-400">
            Backend Development
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-light">
            I specialize in building powerful and adaptable systems, my approach
            is oriented towards the creation of meticulous and ell-documented
            code, focused on the security and efficiency of the applications.
          </p>
        </motion.article>
      </div>
    </motion.section>
  );
}
