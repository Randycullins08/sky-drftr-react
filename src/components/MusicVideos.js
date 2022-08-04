export default function MusicVideos() {
  return (
    <div className="music-videos-container">
      <div className="first-video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/ZY2CYobRAa8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="second-video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/Br7ehwUTSzg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="third-video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/4vZcIK809DU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
