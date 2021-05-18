import React from "react";
import NavBar from "./NavBar";

function Layout({ children, activePath }) {
    return (
        <>
            <div className="layout-main">
                <NavBar activePath={activePath} />
                <main className="content">{children}</main>
            </div>
            <hr className="divider" />
            <footer className="footer">
                <ul>
                    <li>
                        <a
                            href="https://github.com/omerdemirkan"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/omer-demirkan/"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://devpost.com/omerdemirkan"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Devpost
                        </a>
                    </li>
                </ul>
                <div className="footer-text-section">
                    <p>
                        Made with ❤️ <br />
                        on 05/18/2021
                    </p>
                </div>
            </footer>
            <style jsx>{`
                .layout-main {
                    margin: auto;
                    width: 100%;
                    padding: 0 1rem;
                    max-width: 950px;
                    min-height: 100vh;
                }
                .divider {
                    margin: 0;
                }
                .content {
                    padding: 4rem 0 16rem;
                }
                .footer {
                    padding: 1.4rem 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .footer ul {
                    list-style: none;
                    text-align: right;
                    margin: 0 1rem;
                }
                .footer-text-section {
                    margin: 0 1rem;
                }
            `}</style>
        </>
    );
}

export default Layout;
