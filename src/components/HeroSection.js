import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="hero-section-container" id="home">
      <div className="logo-wrapper">
        <img
          src="/img/SKYDRFTR-LOGO-COSMIC-W-TRANSPARENT-BG.png"
          alt="band logo"
        />
      </div>

      <div className="social-links-wrapper">
        <Link
          to={{ pathname: "https://www.facebook.com/SkyDRFTR/" }}
          target="_blank"
        >
          <i className="fab fa-facebook"></i>
        </Link>
        <Link
          to={{ pathname: "https://www.instagram.com/skydrftr/" }}
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
        </Link>
        <Link
          to={{ pathname: "https://twitter.com/skydrftrmusic/" }}
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
        </Link>
        <Link
          to={{ pathname: "https://www.tiktok.com/@skydrftr?" }}
          target="_blank"
        >
          <i className="fab fa-tiktok"></i>
        </Link>
        <Link
          to={{
            pathname:
              "https://www.youtube.com/channel/UCqETSavnuiDw7POcrUKLiZQ",
          }}
          target="_blank"
        >
          <i className="fab fa-youtube"></i>
        </Link>
        <Link
          to={{
            pathname:
              "https://open.spotify.com/artist/2a4hFh89XbgUtTYdFHTQFW?utm_source=embed_v2&go=1&play=1&nd=1",
          }}
          target="_blank"
        >
          <i className="fab fa-spotify"></i>
        </Link>
      </div>
    </div>
  );
}
