import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    speed?: number;
    scale?: number;
}

export const ParallaxImage = ({
    src,
    alt,
    className = "",
    speed = 0.5,
    scale = 1.2,
}: ParallaxImageProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}px`, `${speed * 100}px`]);

    return (
        <div ref={ref} className={`parallax-container ${className}`}>
            <motion.img
                src={src}
                alt={alt}
                style={{ y, scale }}
                className="w-full h-full object-cover"
            />
        </div>
    );
};
