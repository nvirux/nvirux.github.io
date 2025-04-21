import { Routes, Route, NavLink } from "react-router-dom";
import About from "./pages/About";
import Socials from "./pages/Socials.jsx";

export default function App() {
    return (
        <div
            className="terminal-window"
            style={{ userSelect: "none" }}
            onContextMenu={e => e.preventDefault()}
        >
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                </div>
                <div className="terminal-title">netvirux@website:~</div>
            </div>
            <div className="terminal-content">
                <div className="terminal-nav">
                    <div className="terminal-prompt">
                        <span>whoami</span>
                    </div>
                    <div className="terminal-nav-links">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "terminal-nav-link active"
                                    : "terminal-nav-link"
                            }
                        >
                            about
                        </NavLink>
                        <NavLink
                            to="/socials"
                            className={({ isActive }) =>
                                isActive
                                    ? "terminal-nav-link active"
                                    : "terminal-nav-link"
                            }
                        >
                            socials
                        </NavLink>
                    </div>
                </div>

                <div className="terminal-page">
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/socials" element={<Socials />} />
                    </Routes>
                </div>

                <div className="cursor"></div>
            </div>
        </div>
    );
}
