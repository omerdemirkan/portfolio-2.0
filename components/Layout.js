import React from "react";
import NavBar from "./NavBar";

function Layout({ children, activePath }) {
    return (
        <div className="layout">
            <NavBar activePath={activePath} />
            <main>{children}</main>
            <style jsx>{`
                .layout {
                    margin: auto;
                    width: 100%;
                    padding: 0 1rem;
                    max-width: 950px;
                    height: 100vh;
                }

                .layout main {
                    padding: 4rem 0;
                }
            `}</style>
        </div>
    );
}

export default Layout;
