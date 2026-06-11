// src/App.jsx
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Reasons from "./components/Reasons";
import Soundtrack from "./components/Soundtrack";
import "./index.css";

function App() {
  const name = "Dhamu";
  return (
    <>
      <Hero name={name} />

      <Timeline />
      <Gallery />
      <Reasons />
      <Soundtrack />

      {/* Final Heartfelt Message */}
      <section className="final-section">
        <div className="final-content">
          <h2>Happy Birthday, {name} ❤️</h2>
          <p>
          Today is a celebration of the amazing person you are. Thank you for your endless patience, your infectious laugh, and the way you make me feel so loved. I promise you this: we'll fight, we'll stay together, and we'll love each other forever.My Love❤️
          <br />
            You are my favorite chapter in every story.
            <br />
            Thank you for making life so beautiful.
            
          </p>
          <div className="final-heart">💖</div>
          <p className="final-signature">Forever yours</p>
        </div>
      </section>
    </>
  );
}

export default App;
