function ContentBlockHeader({
    title,
    subtitle,
    action,
    noAccent,
    learnMoreUrl,
}) {
    const titleElement = title && (
        <h3
            className={!noAccent ? "accent " : ""}
            style={{
                marginBottom: ".4rem",
            }}
        >
            {title}
        </h3>
    );

    if (!action && learnMoreUrl)
        action = (
            <a
                href={learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="accent underline"
            >
                Learn More
            </a>
        );
    else if (titleElement && learnMoreUrl)
        titleElement = (
            <a
                href={learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="accent underline"
            >
                {titleElement}
            </a>
        );

    return (
        <div className="content-block-container">
            <div>
                {titleElement}
                {subtitle && <h6 className="subtitle">{subtitle}</h6>}
            </div>
            {typeof action === "string" ? (
                <p className="action">{action}</p>
            ) : (
                <span className="action">{action}</span>
            )}

            <style jsx>{`
                .content-block-container {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                }
                .title {
                    margin-bottom: 0.4rem;
                }

                .subtitle {
                    margin: 0rem;
                }

                .action {
                    margin-top: 1.4rem;
                }
            `}</style>
        </div>
    );
}

export default ContentBlockHeader;
