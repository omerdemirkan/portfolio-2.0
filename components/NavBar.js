import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const navigationElements = [
    { label: "home", path: "/" },
    { label: "about me", path: "/about-me" },
    { label: "contact me", path: "/contact-me" },
];

function NavBar({ activePath }) {
    return (
        <div className="navbar-container">
            <Logo />

            <nav>
                {navigationElements.map(({ path, label }) => (
                    <Link href={path}>
                        <a
                            style={{
                                textDecoration:
                                    path === activePath ? "underline" : "none",
                            }}
                        >
                            {label}
                        </a>
                    </Link>
                ))}
            </nav>

            <style jsx>{`
                .navbar-container {
                    overflow: auto;
                    display: flex;
                    justify-content: space-between;
                    padding: 1.5rem 0;
                }

                .navbar-container nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 300px;
                }
            `}</style>
        </div>
    );
}

export default NavBar;
