"use client"

import React, { useEffect } from 'react'
import { useMotionTemplate, useMotionValue, animate, motion } from 'framer-motion';
import obj from "@/assets/obj1.png";
import profilepic from "@/assets/profilepic.png";
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const TOP_COLORS = ["#1E67C6", "#F4F4F4", "#2C3E50", "#00B8D9"]

export const Hero = () => {
    const color = useMotionValue(TOP_COLORS[0])

    useEffect(() => {
        animate(color, TOP_COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [color])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`2px solid ${color}`
    const boxShadow = useMotionTemplate`0 4px 24px ${color}`

    return (
        <motion.section
            style = {{
                backgroundImage
            }}
            className="relative grid min-h-screen place-items-center overflow-hidden px-4 py-24 text-gray-200"
        >
            <div className="z-10 flex flex-col items-center">
                <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Currently employed
                </span>
                <h1 className="text-white/40 text-5xl md:text-7xl font-black">Hi!, I am</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight
                               text-transform text-5xl md:text-7xl">Dwayne D&apos;costa</h1>
                <Image 
                    src={profilepic}
                    alt='profile pic'
                    width={250}
                    height={250} 
                />
                <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
                    <Image 
                        src={obj}
                        alt="3D object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />
                    <Image 
                        src={obj}
                        alt="3D object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />
                    <Image 
                        src={obj}
                        alt="3D object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />
                    <p className="font-medium">Successfully worked with 3 high-growth companies</p>
                </div>
            </div>
            <p className="z-10 my-6 max-w-xl text-center">Cross-functional expertise in AI Engineering, Data Analytics, 
                                        Market Research, and SaaS Development, successfully delivered 12+ 
                                        key projects, generating measurable business value.</p>
            
            <motion.button
                style={{
                    border,
                    boxShadow
                }}
                whileHover={{
                    scale: 1.015
                }}
                whileTap={{
                    scale: 0.985
                }}
                className="z-10 flex w-fit items-center gap-2 rounded-full px-4 py-2"
            >
                Download CV
                <FiArrowRight className="" />
            </motion.button>

            <div className="bg-circle-container">
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>
        </motion.section>
    )
}