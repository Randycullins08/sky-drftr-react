import { Link } from "react-router-dom";

export default function AlbumBio() {
  return (
    <div className="album-bio-container">
      <div className="album-cover">
        <img src="/img/Johnny-Harpoon-Cover3.png" alt="album-cover" />
      </div>

      <div className="album-bio">
        <div className="bio-header">
          <h1>About The Album</h1>
        </div>
        <div className="bio-content">
          <p>
            Where is it that we go, Johnny, when we dream? In our waking hours,
            reluctantly we walk through the depths of the fog, not noticing the
            gravel underneath our feet. The ground is uneven. We are unsteady.
            Reluctantly, we talk to the shadows, unaware of who walks with us.
            We notice only the noise, ignoring the beckoning silence as it cuts
            through the fog, echoing our own names back to us. When we dream
            though, Johnny, the spaces between our fingers come to life. With
            each movement our molecules vibrate, dancing with one another,
            dissipating the fog. Seamlessly, they melt. We hold an awareness of
            the waves that the colors arrive on, shining more vibrantly than
            they once had. Those who are seemingly far come closer. We stop, for
            what feels like the first time, and listen to the silence. It calls
            us in, caressing our names carefully on its lips before breathing
            them out. We follow each breath until it is our own. Fear no longer
            exists as the walls around us shatter and reality does too. Are they
            not the same place though, Johnny? Is our world not molded by our
            perception of it? Is our perception not dulled by the fog? You don't
            remember me yet, Johnny, but I need you to trust me. I need you to
            listen through the fog, and in the silence, the voice that you hear
            is mine and it is also yours. I need you to follow that voice,
            looking through the fog. The synchronicities were left by me and
            also by you. This breadcrumb trail will lead you back to me and also
            back to you, but are we not the same?
          </p>
        </div>
        <Link
          to={{
            pathname:
              "https://open.spotify.com/album/6W7WiVKzeSltRdJwT1x9WF?si=6iOT9eyARwOtm6gvJdjJhg",
          }}
          target="_blank"
        >
          <button>LISTEN</button>
        </Link>
      </div>
    </div>
  );
}
