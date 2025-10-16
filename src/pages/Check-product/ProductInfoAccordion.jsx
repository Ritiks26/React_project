import { useState, useRef, useEffect } from "react";
import plusIcon from "../../assets/icons8-plus.svg";
import "./ProductInfoAccordion.css";
import gsap from "gsap";

const sections = [
  {
    title: "Shipping Information",
    content:
      "International orders will be delivered express through DHL Express. All orders will be sent with a tracking number once dispatched from the warehouse. For more information about shipping, see here.",
  },
];

export function ProductInfoAccordion() {
  const [sectionOpen, setSectionOpen] = useState(false);
  const iconRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const toggleSection = () => {
    if (!sectionOpen) {
      setSectionOpen(true);

      gsap.to(iconRef.current, {
        rotate: 45,
        duration: 0.3,
      });
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.4, delay: 0.2, ease: "power2.out" }
      );
      gsap.to(sectionRef.current, {
        height: "28vh",
        duration: 0.6,
      });
    } else {
      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.3,
      });
      gsap.to(textRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setSectionOpen(false),
      });
      gsap.to(sectionRef.current, {
        height: "5vh",
        duration: 0.6,
      });
    }
  };
  return (
    <div className="helping-container">
      {sections.map((sec) => (
        <div ref={sectionRef} className="outer-container">
          <div className="helping-container-child">
            <p onClick={toggleSection}>{sec.title}</p>
            <img ref={iconRef} onClick={toggleSection} src={plusIcon} alt="" />
          </div>
          <div className="content">
            <p ref={textRef}>
              <strong></strong>
              {sec.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
