import React from "react";

function ContentBlockList({ items }) {
    return (
        <>
            <ul className="content-block-list">
                {items.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <style jsx>{`
                .content-block-list li {
                    margin: 0.6rem 0;
                    color: var(--contrast-secondary);
                }
            `}</style>
        </>
    );
}

export default ContentBlockList;
