import { useEffect, useRef } from "react"
import paw from "../assets/paw.png"
import "../styles/Background.css"

export default function Background() {
  const pawRefs = useRef([])
  const totalPaws = 18

  useEffect(() => {
    pawRefs.current = pawRefs.current.slice(0, totalPaws)

    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewH = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const scrollable = Math.max(1, docHeight - viewH)
      const progress = scrollY / scrollable

      pawRefs.current.forEach((pawEl, i) => {
        if (!pawEl) return

        // Fade in based on scroll progress
        const revealPoint = i / (totalPaws - 1)
        const fadeRange = 0.2
        // const start = revealPoint - fadeRange / 2
        const start = revealPoint - fadeRange 
        // const end = revealPoint + fadeRange / 2
        const end = revealPoint + fadeRange;

        let opacity = 0
        if (progress <= start) opacity = 0
        else if (progress >= end) opacity = 0.6
        else opacity = (progress - start) / (end - start)

        pawEl.style.opacity = opacity.toFixed(2)

        const moveY = -scrollY;
        pawEl.style.transform = `translateY(${moveY}px)`
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Evenly spaced vertical line down the screen
const getTrailPositions = () => {
  const positions = [];
  const startTop = 10; // distance from top of screen
  const stepY = 10; // vertical spacing between paw prints
  for (let i = 0; i < totalPaws; i++) {
    if (i % 2 === 0) {
      positions.push({ 
        top: `${startTop + i * stepY}%`, 
        right: `10%` // every-other paw offset to the right
      });
    } else {
      positions.push({ 
        top: `${startTop + i * stepY}%`, 
        right: `5%` // centered
      });
    }
  }
  return positions;
};

  const trail = getTrailPositions();

  return (
    <div className="background" aria-hidden="true">
      {trail.map((pos, i) => (
        <img
          key={i}
          ref={(el) => (pawRefs.current[i] = el)}
          src={paw}
          alt="paw print"
          className="paw"
          style={{
            top: pos.top,
            right: pos.right,
            opacity: 0,
          }}
          draggable="false"
        />
      ))}
    </div>
  );
}
