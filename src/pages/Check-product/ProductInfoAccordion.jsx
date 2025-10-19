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
  {
    title: "Fabric Information",
    content:
      "International orders will be delivered express through DHL Express. All orders will be sent with a tracking number once dispatched from the warehouse. For more information about shipping, see here. International orders will be delivered express through DHL Express. All orders will be sent with a tracking number once dispatched from the warehouse. For more information about shipping, see here. International orders will be delivered express through DHL Express. All orders will be sent with a tracking number once dispatched from the warehouse. For more information about shipping, see here",
  },
];

export function ProductInfoAccordion() {
  const [sectionOpen, setSectionOpen] = useState(null);
  const iconRef = useRef([]);
  const sectionRef = useRef([]);
  const textRef = useRef([]);
  const toggleSection = (i) => {
    const isOpen = sectionOpen === i;
    setSectionOpen(isOpen ? null : i);

    if (!isOpen) {
      gsap.to(iconRef.current[i], {
        rotate: 45,
        duration: 0.3,
      });
      gsap.fromTo(
        textRef.current[i],
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.4, delay: 0.2, ease: "power2.out" }
      );
      gsap.to(sectionRef.current[i], {
        height: "28vh",
        duration: 0.6,
      });
    } else {
      gsap.to(iconRef.current[i], {
        rotate: 0,
        duration: 0.3,
      });
      gsap.to(textRef.current[i], {
        opacity: 0,
        y: -15,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(sectionRef.current[i], {
        height: "5vh",
        duration: 0.6,
      });
    }
  };
  return (
    <div className="helping-container">
      {sections.map((sec, i) => (
        <div
          key={i}
          ref={(el) => (sectionRef.current[i] = el)}
          className="outer-container"
        >
          <div className="helping-container-child">
            <p
              onClick={() => {
                toggleSection(i);
              }}
            >
              {sec.title}
            </p>
            <img
              ref={(el) => (iconRef.current[i] = el)}
              onClick={() => {
                toggleSection(i);
              }}
              src={plusIcon}
              alt=""
            />
          </div>
          <div className="content">
            <p ref={(el) => (textRef.current[i] = el)}>
              <strong></strong>
              {sec.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
