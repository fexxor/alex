import React from "react";
import "./App.css";
import fbLogo from "./fb.svg";
import vimeoLogo from "./vimeo.svg";
import imdbLogo from "./imdb.svg";
import Work from "./pages/Work/Work";
import WorkFullscreen from "./pages/WorkFullscreen/WorkFullscreen";
import About from "./pages/About/About";
import News from "./pages/News/News";
import {
  HashRouter,
  Route,
  Routes,
  Navigate,
  NavLink,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter // basename={window.location.pathname || ""}
      >
        <main>
          <header className="App-header">
            <Link to="/work">
              <h1>ALEXANDER KEREKLIDIS TURPIN</h1>
            </Link>
            <nav>
              <div className="nav-links">
                <NavLink
                  to="/work"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Work
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About
                </NavLink>
                <NavLink
                  to="/news"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  News
                </NavLink>
              </div>
              <div className="socials">
                <a
                  href="https://www.facebook.com/alexander.kereklidisturpin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={fbLogo} alt="Facebook"></img>
                </a>
                <a
                  href="https://vimeo.com/user17012207"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={vimeoLogo} alt="Viemo"></img>
                </a>
                <a
                  href="https://www.imdb.com/name/nm7794377"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={imdbLogo} alt="IMDB"></img>
                </a>
              </div>
            </nav>
          </header>
          <Routes>
            <Route path="*" element={<Navigate to="/work"></Navigate>} />
            <Route path="work" Component={Work} />
            <Route path="view/:id" Component={WorkFullscreen} />
            <Route path="about" Component={About} />
            <Route path="news" Component={News} />
          </Routes>
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
