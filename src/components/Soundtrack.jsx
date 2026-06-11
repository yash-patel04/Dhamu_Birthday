import { useEffect, useState, useRef } from "react";
import "./Soundtrack.css";
import DhunLagiRe from "../assets/music/Dhun_Lagi_Re.mp3";
import TuHaiyeHaaliAave from "../assets/music/Tu_Haiye_Haali_Aave.mp3";
import LaganLagiRe from "../assets/music/Lagan_Lagi_Re.mp3";
import ManeMalje from "../assets/music/Mane_Malje.mp3";
import MeeraBanaviTeToShyam from "../assets/music/Meera_Banavi_Te_To_Shyam.mp3";
import VaariGayo from "../assets/music/Vaari_Gayo.mp3";

const songs = [
  {
    id: 1,
    title: "Vhalam Aavo Ne",
    artist: "Sachin-Jigar",
    cover: "https://c.saavncdn.com/015/Love-Ni-Bhavai-Gujarati-2017-500x500.jpg",
    audioSrc: DhunLagiRe,        // ← Correct field name
  },
  {
    id: 2,
    title: "Tu Haiye Haali Aave",
    artist: "Jigardan Gadhavi",
    cover: "https://c.saavncdn.com/845/Tu-Haiye-Haali-Aave-Gujarati-2024-20240711184427-500x500.jpg",
    audioSrc: TuHaiyeHaaliAave,
  },
  {
    id: 3,
    title: "Lagan Lagi Re",
    artist: "Aishwarya Majmudar",
    cover: "https://m.media-amazon.com/images/M/MV5BZjBhZjE2MjgtMzMzOC00ZGI4LTkwZGUtYzc3NzNjODZiNDE1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    audioSrc: LaganLagiRe,
  },
  {
    id: 4,
    title: "Mane Malje",
    artist: "Jigardan Gadhavi",
    cover: "https://c.saavncdn.com/939/Mane-Malje-From-Fakt-Purusho-Maate-Gujarati-2024-20240821110355-500x500.jpg",
    audioSrc: ManeMalje,
  },
  {
    id: 5,
    title: "Meera Banavi Te To Shyam",
    artist: "Ishani Dave",
    cover: "https://c.saavncdn.com/068/Kahi-Dene-Prem-Che-Gujarati-2023-20230914160021-500x500.jpg",
    audioSrc: MeeraBanaviTeToShyam,
  },
  {
    id: 6,
    title: "Vaari Gayo",
    artist: "Jigardan Gadhavi",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-MpHxArfoDqrpxhEwFXBy0UhbxLCiTiIdw&s",
    audioSrc: VaariGayo,
  },
];

export default function Soundtrack() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const soundtrackRef = useRef(null);

  const togglePlay = (song) => {
    if (!song.audioSrc) return;

    const audio = audioRef.current;

    if (currentSong?.id === song.id && isPlaying) {
      // Pause
      audio.pause();
      setIsPlaying(false);
    } else {
      // Play
      if (currentSong?.id !== song.id) {
        audio.src = song.audioSrc;
        setCurrentSong(song);
      }
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Playback failed:", err);
          alert("Could not play the song. Check console for details.");
        });
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      audioRef.current.pause();
    };
  }, []);

  // Intersection Observer (unchanged)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = soundtrackRef.current?.querySelectorAll(".song-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="soundtrack" className="section">
      <div className="section-header">
        <h2>Our Soundtrack</h2>
        <p>Songs that feel like us</p>
      </div>

      <div className="songs-grid" ref={soundtrackRef}>
        {songs.map((song) => (
          <div
            className={`song-card ${currentSong?.id === song.id && isPlaying ? "playing" : ""}`}
            key={song.id}
            onClick={() => togglePlay(song)}
            style={{ cursor: song.audioSrc ? "pointer" : "default" }}
          >
            <div className="song-cover">
              <img src={song.cover} alt={song.title} loading="lazy" />
              <div className="play-overlay">
                {currentSong?.id === song.id && isPlaying ? "⏸" : "▶"}
              </div>
            </div>
            <div className="song-info">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
              
              {song.audioSrc ? (
                <button className="listen-btn">
                  {currentSong?.id === song.id && isPlaying ? "Pause" : "Play Song"}
                </button>
              ) : (
                <p className="coming-soon">Coming Soon</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}