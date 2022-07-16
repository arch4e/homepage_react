import { Link, Outlet, Route, Routes } from "react-router-dom";

/* components */
import About   from "./About";
import Gallery from "./Gallery";
import Log     from "./Log";

/* stylesheets */
import "../styles/global.css";
import "../styles/app.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index              element={ <About />   } />
          <Route path="posts"       element={ <Log />     } />
          <Route path="gallery"     element={ <Gallery /> } />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

function Layout() {
  return(
    <>
      <div id="header">
        <span className="logo">
          <Link to="/">arch<span>IV</span>e</Link>
        </span>
        <ul className="nav">
          <li><Link to="/posts">Log</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </div>

      <div id="main">
        <Outlet />
      </div>

      <div id="footer">
        <p>&copy; 2022 arch4e.com all rights reserved.</p>
      </div>
    </>
  );
}

function NotFound() {
  return (
    <div id="error-404">
      <span className="accent-color">404</span><span>Not Found.</span>
    </div>
  );
}

export default App;