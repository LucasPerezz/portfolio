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
      className="h-full bg-[#23272a] w-full container max-w-[1000px] rounded-xl p-10 flex flex-col shadow-xl gap-10"
    >
      <div className="flex gap-3 items-center">
        <HiMiniCodeBracket color="#7289da" size={"24px"} />
        <h3 className="text-lg md:text-xl text-[#7289da]">ABOUT ME</h3>
      </div>
      <p className="text-neutral-400 text-lg md:text-xl font-light">
        Passionate about programming. Resilient, competitive, and persistent.{" "}
        <br /> My goal is to put into practice all the knowledge acquired during
        my academic training and be part of a team that allows me to develop
        personally and professionally.
        <br />
        I am currently studying Computer Engineering at the "Universidad Nacional de La Matanza".
      </p>
      <div className='mx-auto md:flex  flex-col max-w-lg'>
        <button className='border h-full rounded-md w-full text-[#7289da] text-base md:text-lg px-2 md:px-5 md:py-1 border-[#7289da] items-center mx-auto mb-3 hover:border-neutral-600'><a href="https://drive.google.com/file/d/1wTzegr14IdFPGLhRKvynMQrzt7sv_GaW/view?usp=sharing">View CV</a></button>
        <button className='border h-full rounded-md w-full text-[#7289da] text-base md:text-lg px-2 md:px-5 md:py-1 border-[#7289da] items-center mx-auto hover:border-neutral-600'><a href="https://drive.google.com/file/d/1UMmoREeZZl8kX1820tDBSiNwxXc6ATV7/view?usp=drive_link">View Academic History</a></button>
      </div>

      <div className="flex gap-3 items-center mt-20 md:mt-0">
        <HiOutlineBriefcase color="#7289da" size={"24px"} />
        <h3 className="text-lg md:text-xl text-[#7289da]">What Im Doing</h3>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly gap-4">
        <motion.article
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="slide-in-left border border-neutral-700 rounded-xl p-5 md:p-10 flex flex-col justify-center items-center gap-3 w-full hover:border-[#7289da] transition-all"
        >
          <HiMiniComputerDesktop color="#7289da" size={"40px"} />
          <h2 className="text-xl md:text-2xl text-[#7289da]">
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
          className="slide-in-right border border-neutral-700 rounded-xl p-5 md:p-10 flex flex-col justify-center items-center gap-3 w-full hover:border-[#7289da] transition-all"
        >
          <HiOutlineCloud color="#7289da" size={"40px"} />
          <h2 className="text-xl md:text-2xl text-[#7289da]">
            Backend Development
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-light">
            I specialize in building powerful and adaptable systems, my approach
            is oriented towards the creation of meticulous and well-documented
            code, focused on the security and efficiency of the applications.
          </p>
        </motion.article>
      </div>
    </motion.section>
  );
}
