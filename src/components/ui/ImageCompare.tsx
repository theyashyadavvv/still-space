import { useRef, useState, useCallback, MouseEvent, TouchEvent } from "react";

interface ImageCompareProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
    className?: string;
}

export const ImageCompare = ({
    beforeImage,
    afterImage,
    beforeLabel = "Before",
    afterLabel = "After",
    className = "",
}: ImageCompareProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = useCallback(
        (clientX: number) => {
            if (!containerRef.current) return;
            const { left, width } = containerRef.current.getBoundingClientRect();
            const position = ((clientX - left) / width) * 100;
            setSliderPosition(Math.min(Math.max(position, 0), 100));
        },
        []
    );

    const handleMouseMove = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            if (isDragging) {
                handleMove(e.clientX);
            }
        },
        [isDragging, handleMove]
    );

    const handleTouchMove = useCallback(
        (e: TouchEvent<HTMLDivElement>) => {
            if (isDragging && e.touches[0]) {
                handleMove(e.touches[0].clientX);
            }
        },
        [isDragging, handleMove]
    );

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden cursor-ew-resize select-none ${className}`}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
        >
            {/* After Image (Background) */}
            <img
                src={afterImage}
                alt={afterLabel}
                className="w-full h-full object-cover"
                draggable={false}
            />

            {/* Before Image (Foreground with clip) */}
            <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt={beforeLabel}
                    className="w-full h-full object-cover"
                    draggable={false}
                />
            </div>

            {/* Slider Line */}
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%` }}
            >
                {/* Slider Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <svg
                        className="w-5 h-5 text-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                        />
                    </svg>
                </div>
            </div>

            {/* Labels */}
            <span className="absolute top-4 left-4 text-label text-white bg-black/50 px-3 py-1 rounded">
                {beforeLabel}
            </span>
            <span className="absolute top-4 right-4 text-label text-white bg-black/50 px-3 py-1 rounded">
                {afterLabel}
            </span>
        </div>
    );
};
