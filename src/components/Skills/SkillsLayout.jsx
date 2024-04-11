"use client"
import React from 'react'
import { motion } from "framer-motion";
import { BiNetworkChart } from "react-icons/bi";
import Skill from "./Skill";

export default function SkillsLayout({skills}) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1 , scale: 1}}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#23272a] w-full container max-w-[1000px] rounded-xl shadow-xl p-5 md:p-10 flex flex-col gap-8"
    >
      <div className="flex gap-3 items-center">
        <BiNetworkChart color="#7289da" size={"24px"} />
        <h2 className="text-[#7289da] text-xl">SKILLS</h2>
      </div>

      <div className=" flex mx-auto md:gap-3 items-center flex-wrap justify-center">
        {skills.map((skill) => (
          <Skill data={skill} key={skill._id} />
        ))}
      </div>
    </motion.section>
  )
}
