import { useEffect, useRef } from "react";
import "./Gallery.css";

const photos = [
  {
    id: 1,
    url: "https://i.postimg.cc/brgL0mf8/Whats-App-Image-2026-06-11-at-12-18-40-AM.jpg",
    caption: "Our first trip together",
  },
  {
    id: 2,
    url: "https://i.postimg.cc/8z94bF9C/Whats-App-Image-2026-06-11-at-12-18-41-AM-(1).jpg",
    caption: "Our First Navratri",
  },
  {
    id: 3,
    url: "https://i.postimg.cc/SQdGv1HS/Whats-App-Image-2026-06-11-at-12-18-42-AM-(1).jpg",
    caption: "Rain walk",
  },
  {
    id: 4,
    url: "https://i.postimg.cc/7h8jtsRX/Whats-App-Image-2026-06-11-at-12-18-39-AM.jpg",
    caption: "Golden hour with you",
  },
  {
    id: 5,
    url: "https://i.postimg.cc/kMTxc6Rp/Whats-App-Image-2026-06-11-at-12-18-43-AM-(1).jpg",
    caption: "Just us, always",
  },
  {
    id: 6,
    url: "https://i.postimg.cc/sD150jpc/Whats-App-Image-2026-06-11-at-12-18-42-AM.jpg",
    caption: "My safe place",
  },
];

export default function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 120);
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = galleryRef.current.querySelectorAll(".gallery-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="section">
      <div className="section-header">
        <h2>Our Beautiful Memories</h2>
        <p>Moments I want to relive forever</p>
      </div>

      <div className="gallery-grid" ref={galleryRef}>
        {photos.map((photo, index) => (
          <div className="gallery-item" key={photo.id}>
            <div className="gallery-card">
              <img src={photo.url} alt={photo.caption} loading="lazy" />
              <div className="gallery-overlay">
                <p>{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
