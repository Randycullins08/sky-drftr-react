import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AlbumBio from "./components/AlbumBio";
import MusicVideos from "./components/MusicVideos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AlbumBio />
      <MusicVideos />
    </div>
  );
}

export default App;
