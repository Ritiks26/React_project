import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

// gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  // const animateRef = useRef(null);
  // const triggerRef = useRef(null);

  // useEffect(() => {
  //   gsap.to(animateRef.current, {
  //     width: "30vw",
  //     scrollTrigger: {
  //       trigger: triggerRef.current,
  //       start: "top top",
  //       end: "top 20%",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });
  // }, []);

  return (
    <>
      <div className="hero-banner">
        <div className="hero-pic">
          <img
            className="ad-image"
            src="https://akkeknitwear.com/website/wp-content/uploads/2023/11/LIMITED.webp"
            alt=""
          />
          <p className="ad-text">FEEL THE DIFFERENCE</p>
        </div>
        <div className="hero-text">
          <div className="text">
            RSNB IS THE NEW NORM
            <div className="width-increasing"></div>
          </div>
        </div>
      </div>
    </>
  );
}
