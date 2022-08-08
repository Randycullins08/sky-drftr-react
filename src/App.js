import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AlbumBio from "./components/AlbumBio";
import MusicVideos from "./components/MusicVideos";
import ConcertImgSlider from "./components/ConcertImgSlider";
import BandBio from "./components/BandBio";
import SpotifyPlayer from "./components/SpotifyPlayer";

import { concertImages } from "./sliderData/concertImages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AlbumBio />
      <MusicVideos />
      <BandBio />
      <ConcertImgSlider slides={concertImages} />
      <SpotifyPlayer />
    </div>
  );
}

export default App;
