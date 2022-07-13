import { Link, Outlet, Route, Routes } from "react-router-dom";

/* components */
import About   from "./About";
import Gallery from "./Gallery";

/* Stylesheets */
import "../styles/global.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index          element={ <About />   } />
          <Route path="gallery" element={ <Gallery /> } />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
  )
}

function Layout() {
  return(
    <>
      <ul id="nav">
        <li>
          <Link to="/">about</Link>
          <Link to="/gallery">gallery</Link>
        </li>
      </ul>

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