"use client";

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from "motion/react";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-4 text-lg sm:text-xl">
                I am an Independent and student at the University of Tasmania, majoring in{" "}
                <span className="font-medium">Artificial Intelligence</span>. With Strong foundation in{" "}
                <span className="font-medium">iOS</span> development, 
                <span className="font-medium">full-stack</span> web development and{" "}
                <span className="font-medium">AI</span>, I aim to craft solutions that combine functionality with innovation.
                My primary interests include{" "}
                <span className="font-medium">Large Language Models (LLMs)</span> and their{" "}
                <span className="font-medium">applications</span>, as well as exploring how 
                technology can bridge the gap between ideas and impactful products. 
                <br />Outside of coding, I enjoy staying up-to-date with the latest advancements in AI 
                and experimenting with new tools to push the boundaries of what's possible.
            </p>
        </motion.section>
    );
}
