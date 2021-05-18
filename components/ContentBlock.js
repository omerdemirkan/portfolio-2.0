import ContentBlockHeader from "./ContentBlockHeader";
import ContentBlockList from "./ContentBlockList";

function ContentBlock({
    title,
    subtitle,
    action,
    noAccent,
    items,
    learnMoreUrl,
}) {
    return (
        <div className="content-block-container">
            <ContentBlockHeader
                title={title}
                subtitle={subtitle}
                action={action}
                noAccent={noAccent}
                learnMoreUrl={learnMoreUrl}
            />
            {items && <ContentBlockList items={items} />}

            <style jsx>{`
                .content-block-container {
                    margin-bottom: 2rem;
                }
            `}</style>
        </div>
    );
}

export default ContentBlock;
