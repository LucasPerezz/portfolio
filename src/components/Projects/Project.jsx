"use client"

import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { MdLink } from "react-icons/md";
import {motion} from 'framer-motion'
import Image from 'next/image';

export default function Project({data}){
    return (
        <motion.article whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="relative overflow-hidden rounded-lg cursor-pointer shadow-sm hover:shadow-yellow-400 w-full border border-transparent hover:border-yellow-400">
          <Image
            className="object-cover w-full h-52 brightness-[0.3] blur-sm"
            src={data.image}
            alt={data.project}
            width={500}
            height={500}
          />

          <div className="absolute top-0 px-6 py-4 flex flex-col gap-6 justify-center items-start">
            <h4 className="mb-3 sm:text-xl text-lg font-normal tracking-tight text-white">
              {data.project}
            </h4>
            <div className="flex gap-1 flex-wrap">
                {data.utilities.map((u) => 
                    <p className="leading-normal md:text-base sm:text-sm text-xs text-gray-100 border border-white rounded-xl px-2 md:px-3" key={u._id}>
                        {u.language}
                    </p>
                )}
            </div>
            <div className="flex items-center gap-8">
              <a href={data.url}><MdLink color="white" size={"32px"} /></a>
              <a href={data.github}><IoLogoGithub color="white" size={"32px"} /></a>
            </div>
          </div>
        </motion.article>
    )
}