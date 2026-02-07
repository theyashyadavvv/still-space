import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";

interface AnimatedCounterProps {
    from?: number;
    to: number;
    duration?: number;
    className?: string;
    suffix?: string;
    prefix?: string;
}

export const AnimatedCounter = ({
    from = 0,
    to,
    duration = 2,
    className = "",
    suffix = "",
    prefix = "",
}: AnimatedCounterProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(from);

    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, {
        stiffness: 50,
        damping: 20,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, motionValue, to]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(Math.round(latest));
        });
        return unsubscribe;
    }, [springValue]);

    return (
        <motion.span ref={ref} className={className}>
            {prefix}{displayValue}{suffix}
        </motion.span>
    );
};
