import { useEffect } from 'react';

/* stylesheets */
import "../styles/gallery.css";

/* assets */
import img0 from "../assets/pages/gallery/room.png";
import img1 from "../assets/pages/gallery/hum1.png";
import img2 from "../assets/pages/gallery/hum2.png";
import img3 from "../assets/pages/gallery/aw.png";
import img4 from "../assets/pages/gallery/mz.png";

function Gallery() {
  useEffect(() => {
    document.title = "Gallery - archIVe";
  }, []);

  return(
    <>
      <h1>Gallery</h1>

      <div className="images">
        <img src={ img0 } alt="room" />
        <img src={ img1 } alt="hum1" />
        <img src={ img2 } alt="hum2" />
        <img src={ img3 } alt="aw" />
        <img src={ img4 } alt="az" />
      </div>
    </>
  );
}

export default Gallery;