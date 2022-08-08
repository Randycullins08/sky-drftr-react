export default function SpotifyPlayer() {
  return (
    <div className="spotify-player-container">
      <div className="spotify-player-wrapper">
        <iframe
          src="https://open.spotify.com/embed/album/6W7WiVKzeSltRdJwT1x9WF?utm_source=generator"
          title="Spotify Player"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
}
