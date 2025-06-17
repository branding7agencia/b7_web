import { useState, useEffect, useRef } from "react";

export function useCountUp(end: number, duration: number = 2000 ): number {
    const [count, setCount] = useState(0);
    const frameRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        const animate = (timestamp: number) => {
            if (startTimeRef.current === null) {
                startTimeRef.current = timestamp
            }

            const elapsedTime = timestamp - startTimeRef.current;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentCount = progress * end
        
            setCount(currentCount);

            if(progress < 1) {
                frameRef.current = requestAnimationFrame(animate)
            } else {
                setCount(end);
            }
        };

        frameRef.current = requestAnimationFrame(animate)

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [end, duration])

    return count
}