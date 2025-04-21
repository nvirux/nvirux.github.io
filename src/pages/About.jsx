import { NavLink } from "react-router-dom";
import netvirux from "../assets/images/netvirux.png";

export default function About() {
    return (
        <div className="terminal-section">
            <div className="terminal-section-title">about</div>
            <article className="prose prose-neutral">
                <p>
                    <img src={netvirux} alt="Umar Net Viruz" />
                </p>
                <p>Hello! I’m Umar Net Viruz.</p>
                <p>
                    I'm a passionate full-stack developer and tech enthusiast
                    focused on building powerful, user-friendly tools and
                    platforms. With a strong background in PHP, Laravel, and
                    modern JavaScript frameworks like React and React Native, I
                    love creating seamless web and mobile experiences.
                </p>
                <p>
                    Whether I'm developing VTU platforms, crafting APIs, or
                    diving into system architecture, my mission is to solve
                    real-world problems with clean and efficient code.
                </p>
                <p>
                    When I'm not coding, I enjoy exploring new technologies,
                    mentoring others, and contributing to the tech community.
                </p>
                <hr />
                <p>
                    Thanks for stopping by! Feel free to check out other
                    sections like{" "}
                    <NavLink to="/socials" className="terminal-nav-link">
                        socials
                    </NavLink>{" "}
                    to connect with me.
                </p>
            </article>
        </div>
    );
}
