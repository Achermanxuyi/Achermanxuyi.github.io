"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro () {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex items-center justify-center mt-24">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src="/intro.JPG"
                            alt="Junji Liao"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        >
                        </Image>
                    </motion.div>
                    
                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        🐹
                    </motion.span>
                </div>
            </div>
            
            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5rem] sm:text-2xl"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Junji Liao.</span> I'am a{" "}
                <span className="font-bold">iOS, AI</span> and {" "}
                <span className='font-bold'>full-stack</span> I build 
                <span className="italic"> sites, apps & AI.</span> My focus is {" "}
                <span className="underline"> LLMs</span>.
            </motion.h1>
        </section>
    );
}