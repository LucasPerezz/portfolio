"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Skill({ data }) {
  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col gap-4 items-center justify-evenly p-6 w-[120px] sm:w-[140px] h-[120px] sm:h-[140px] border border-transparent hover:border-lime-400 hover:shadow-lime-400 hover:shadow rounded-xl transition-all"
    >
      <Image
        src={data.image}
        alt={data.language}
        width={500}
        height={500}
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
      />
      <h4 className="sm:text-lg text-sm text-neutral-400">{data.language}</h4>
    </motion.article>
  );
}
