import { useEffect, useRef } from "react";
import "./Timeline.css";

const milestones = [
  {
    year: "12 July 2025",
    title: "Our First meeting at my room",
    desc: "Best Soft Romance Ever",
  },
  {
    year: "15 July 2025",
    title: "First Casual Meeting",
    desc: "A rain walk",
  },
  {
    year: "03 August 2025",
    title: "First Date",
    desc: "Memorable Day of my life",
  },
  {
    year: "27 September 2025",
    title: "First Navratri Together",
    desc: "Energic Garba",
  },
  {
    year: "29 December 2025",
    title: "First Trip",
    desc: "Our little adventure together",
  },
  {
    year: "11 June 2026",
    title: "Today",
    desc: "Celebrating you, my love",
  },
];

export default function Timeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = timelineRef.current.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="section">
      <div className="section-header">
        <h2>Our Love Story</h2>
        <p>Every moment with you is unforgettable</p>
      </div>

      <div className="timeline" ref={timelineRef}>
        {milestones.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              {/* <img src={item.img} alt={item.title} loading="lazy" /> */}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
