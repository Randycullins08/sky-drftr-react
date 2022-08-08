import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AlbumBio from "./components/AlbumBio";
import MusicVideos from "./components/MusicVideos";
import ConcertImgSlider from "./components/ConcertImgSlider";
import BandBio from "./components/BandBio";

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
    </div>
  );
}

export default App;
