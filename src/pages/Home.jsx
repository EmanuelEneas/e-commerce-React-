import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useState } from "react";
import "./Home.css";

function Home() {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <>
      <Header>
        <Navbar />
      </Header>

      <main>
        {/* Video Futurista separado */}
        {showVideo && (
          <div className="video-section">
            <video className="product-video" autoPlay loop muted controls>
              <source src="/videos/ema2.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
          </div>
        )}

        {/* 🔥 Se eliminó la sección Featured Products */}
      </main>
    </>
  );
}

export default Home;


