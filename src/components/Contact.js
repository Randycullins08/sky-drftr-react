import { Link } from "react-router-dom";

export default function Contact() {
  function Mailto({ email, subject, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}`}>{props.children}</a>
    );
  }

  return (
    <div className="contact-container" id="contact">
      <div className="contact-header">
        <h1>CONTACT US</h1>
      </div>
      <div className="email-wrapper">
        <p> Email us at </p>
        <Mailto email="skydrftrmusic@gmail.com" subject="Hello">
          skydrftrmusic@gmail.com
        </Mailto>
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
      </div>
    </div>
  );
}
