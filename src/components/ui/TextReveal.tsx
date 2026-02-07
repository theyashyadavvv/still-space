import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export const TextReveal = ({
    children,
    className = "",
    delay = 0,
    staggerDelay = 0.03
}: TextRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const words = children.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: staggerDelay, delayChildren: delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
        },
    };

    return (
        <motion.span
            ref={ref}
            className={`inline-flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="mr-[0.25em] inline-block"
                    variants={child}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};
