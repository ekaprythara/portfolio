import { useState, useEffect, useRef } from "react";
import type { FC } from "react";

interface DotGridProps {
  /** Jarak antar titik dalam satuan pixel agar presisi membentuk kotak */
  gap?: number;
  dotColor?: string;
  activeColor?: string;
  interactionRadius?: number;
  className?: string;
}

export const DotGrid: FC<DotGridProps> = ({
  gap = 18,
  dotColor = "bg-neutral-800",
  activeColor = "bg-[#FACC14]/50 shadow-[0_0_10px_rgba(250,204,20,0.8)]",
  interactionRadius = 250,
  className = "",
}) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: -9999,
    y: -9999,
  });

  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGridSize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      const cellSize = gap + 16;
      const cols = Math.floor(width / cellSize);
      const rows = Math.floor(height / cellSize);

      setGridSize({ cols: Math.max(cols, 10), rows: Math.max(rows, 10) });
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, [gap]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -9999, y: -9999 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden flex items-center justify-center ${className}`}
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize.cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gridSize.rows}, minmax(0, 1fr))`,
          gap: `${gap}px`,
        }}
      >
        {Array.from({ length: gridSize.rows }).map((_, rowIndex) =>
          Array.from({ length: gridSize.cols }).map((_, colIndex) => (
            <DotItem
              key={`${rowIndex}-${colIndex}`}
              mousePos={mousePos}
              interactionRadius={interactionRadius}
              dotColor={dotColor}
              activeColor={activeColor}
            />
          )),
        )}
      </div>
    </div>
  );
};

interface DotItemProps {
  mousePos: { x: number; y: number };
  interactionRadius: number;
  dotColor: string;
  activeColor: string;
}

const DotItem: FC<DotItemProps> = ({
  mousePos,
  interactionRadius,
  dotColor,
  activeColor,
}) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    if (!dotRef.current) return;

    const rect = dotRef.current.getBoundingClientRect();
    const dotX = rect.left + rect.width / 2;
    const dotY = rect.top + rect.height / 2;

    const dx = mousePos.x - dotX;
    const dy = mousePos.y - dotY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < interactionRadius) {
      setIsActive(true);
      const rawIntensity = 1 - distance / interactionRadius;
      setIntensity(Math.pow(rawIntensity, 0.75));
    } else {
      setIsActive(false);
      setIntensity(0);
    }
  }, [mousePos, interactionRadius]);

  return (
    <div className="flex items-center justify-center w-4 h-4">
      <div
        ref={dotRef}
        style={{
          transform: isActive ? `scale(${1 + intensity * 1.2})` : "scale(1)",
          opacity: isActive ? 0.3 + intensity * 0.7 : 0.3,
          transitionProperty: "all",
          // Animasi cepat saat didekati (300ms), dan memudar perlahan (1200ms) saat kursor menjauh
          transitionDuration: isActive ? "0ms" : "0ms",
          transitionTimingFunction: "ease-in-out",
        }}
        className={`w-1 h-1 rounded-full  ${isActive ? activeColor : dotColor}`}
      />
    </div>
  );
};
