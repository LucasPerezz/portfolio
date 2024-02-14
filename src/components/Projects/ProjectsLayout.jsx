"use client"
import React from 'react'
import { FaBriefcase } from "react-icons/fa6";
import { motion } from "framer-motion";
import Project from "./Project";

export default function ProjectsLayout({projects}) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1 , scale: 1}}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-800 w-full container max-w-[1000px] rounded-xl shadow-xl p-5 sm:p-10 flex flex-col gap-8"
    >
      <div className="flex items-center gap-3">
        <FaBriefcase color="#facc15" size={"24px"} />
        <h3 className="text-base md:text-xl text-yellow-400">PORTFOLIO</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((pro) => (
          <Project data={pro} key={pro._id} />
        ))}
      </div>
    </motion.section>
  )
}
