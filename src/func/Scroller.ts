import { useState, useEffect, useCallback } from "react";

type ScrollDirection = "prev" | "next" | null;
type ScrollReturnType = {
  handleScroll: (scroll: ScrollDirection) => void;
  transformValue: () => string;
  activeScroll: ScrollDirection;
};

const Scroller = (
  initialArray: unknown[],
  initialWidth?: number
): ScrollReturnType => {
  const [width, setWidth] = useState<number>(initialWidth || 0);
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const [activeScroll, setActiveScroll] = useState<ScrollDirection>(null);

  const calculateBoxesPerSlide = useCallback((): number => {
    if (width >= 1920) return 6;
    if (width >= 1366 && width < 1920) return 4;
    if (width >= 1024 && width < 1366) return 4;
    if (width >= 768 && width < 1024) return 4;
    if (width >= 630 && width < 768) return 3;
    if (width >= 430 && width < 630) return 2;
    if (width < 430) return 1;
    return 1;
  }, [width]);

  const handleScroll = (scroll: ScrollDirection): void => {
    const totalBoxes = initialArray.length;

    const maxScrollIndex = (): number => {
      const boxesPerSlide = calculateBoxesPerSlide();
      return Math.max(0, totalBoxes - boxesPerSlide);
    };

    setScrollIndex((prevIndex) => {
      if (scroll === "prev") return Math.max(prevIndex - 1, 0);
      if (scroll === "next") {
        const nextIndex = prevIndex + 1;
        if (nextIndex > maxScrollIndex()) {
          return 0;
        } else {
          return nextIndex; // Di chuyển bình thường đến index tiếp theo
        }
      }
      return prevIndex;
    });

    setActiveScroll(scroll);
    setTimeout(() => {
      setActiveScroll(null);
    }, 100);
  };

  const transformValue = (): string => {
    const boxesPerSlide = calculateBoxesPerSlide();
    const slideWidth = 100 / boxesPerSlide;
    return `translateX(-${scrollIndex * slideWidth}%)`;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return {
    handleScroll,
    transformValue,
    activeScroll,
  };
};

export default Scroller;
