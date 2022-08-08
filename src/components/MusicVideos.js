export default function MusicVideos() {
  return (
    <div className="music-videos-container" id="videos">
      <div className="first-video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/ZY2CYobRAa8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="second-video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/Br7ehwUTSzg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="third-video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/4vZcIK809DU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
