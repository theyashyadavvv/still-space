import { useRef, useState, useCallback, MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
    onClick?: () => void;
}

export const MagneticButton = ({
    children,
    className = "",
    strength = 0.3,
    onClick,
}: MagneticButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            if (!ref.current) return;
            const { left, top, width, height } = ref.current.getBoundingClientRect();
            const x = (e.clientX - left - width / 2) * strength;
            const y = (e.clientY - top - height / 2) * strength;
            setPosition({ x, y });
        },
        [strength]
    );

    const handleMouseLeave = useCallback(() => {
        setPosition({ x: 0, y: 0 });
    }, []);

    return (
        <motion.button
            ref={ref}
            className={`magnetic-hover ${className}`}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};
