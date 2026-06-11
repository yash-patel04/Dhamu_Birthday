import { useEffect, useRef } from "react";
import "./Reasons.css";

const reasons = [
  { id: 1, text: "Your smile lights up my entire world" },
  { id: 2, text: "The way you understand me without saying a word" },
  { id: 3, text: "Your terrible but adorable dad jokes" },
  { id: 4, text: "How safe and loved I feel in your arms" },
  { id: 5, text: "Your passion and dedication for what you care about" },
  { id: 6, text: "Your contagious laugh that makes everything better" },
  { id: 7, text: "Being my home no matter where we are" },
];

export default function Reasons() {
  const reasonsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, i * 80);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = reasonsRef.current.querySelectorAll(".reason-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="reasons" className="section">
      <div className="section-header">
        <h2>Reasons I Love You</h2>
        <p>Just a few from my endless list...</p>
      </div>

      <div className="reasons-grid" ref={reasonsRef}>
        {reasons.map((reason, index) => (
          <div className="reason-card" key={reason.id}>
            <div className="reason-number">0{index + 1}</div>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
