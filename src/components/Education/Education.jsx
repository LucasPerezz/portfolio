"use client"
import React from 'react'
import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";
import Image from 'next/image';

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1 , scale: 1}}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-800 w-full container max-w-[1000px] rounded-xl shadow-xl p-5 md:p-10 flex flex-col gap-8"
    >
        <div className='flex gap-3 items-center'>
            <FaUserGraduate color="#facc15" size={"24px"} />
            <h2 className='text-base md:text-xl text-yellow-400'>EDUCATION</h2>
            <p className='text-neutral-300 text-sm md:text-base hover:text-neutral-700'><a href="https://www.linkedin.com/in/lucasperez26/details/certifications/">Certificates</a></p>
        </div>
        <div className="flex gap-5 items-center">
            <Image src={"https://i.ibb.co/RgjGxsL/coderhouse-logo.png"} width={500} height={500} alt='Study' className='w-14 md:w-16'/>
            <div>
                <h2 className="text-yellow-400 text-base md:text-xl">Desarrollo Web Frontend (React.js) </h2>
                <h3 className="text-neutral-400 text-sm md:text-lg">Coderhouse</h3>
                <p className='text-sm md:text-lg text-neutral-400'>2021 - 2022</p>
            </div>
        </div>
        <div className="flex gap-5 items-center">
            <Image src={"https://i.ibb.co/QNvsgjG/platzi.png"} width={500} height={500} alt='Study' className='w-14 md:w-16'/>
            <div>
                <h2 className="text-yellow-400 text-base md:text-xl">Desarrollo Web</h2>
                <h3 className="text-neutral-400 text-sm md:text-lg">Platzi</h3>
                <p className='text-sm md:text-lg text-neutral-400'>2021 - 2022</p>
            </div>
        </div>
        <div className='flex flex-col gap-5'>
        <div className="flex gap-5 items-center">
            <Image src={"https://i.ibb.co/WkchYXM/unlam-universidad-nacional-de-la-matanza-logo-B665-E562-AA-seeklogo-com.png"} width={500} height={500} alt='Study' className='w-14 md:w-16'/>
            <div className='flex flex-col gap-1'>
                <h2 className="text-yellow-400 text-base md:text-xl">Ingenieria en Informatica</h2>
                <h3 className="text-neutral-400 text-sm md:text-lg">Universidad Nacional de la Matanza</h3>
                <p className='text-sm md:text-lg text-neutral-400'>2022 - Present</p>
            </div>
        </div>
    </div>
    </motion.section>
  )
}
