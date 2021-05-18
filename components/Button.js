function Button({
    children,
    onClick,
    variant = "contained",
    fullWidth = false,
    ...buttonProps
}) {
    return (
        <>
            <button onClick={onClick} {...buttonProps} className="button">
                {children}
            </button>
            <style jsx>{`
                .button {
                    border: none;
                    cursor: pointer;
                    font-family: "Poppins", sans-serif;
                    font-weight: 500;
                    font-size: 1.2rem;
                    padding: 0.5rem 2.2rem;

                    filter: ${variant === "contained"
                        ? "drop-shadow(0px 2px 18px rgba(10, 209, 185, 0.25))"
                        : "drop-shadow(0px 2px 18px rgba(0, 0, 0, 0.12))"};
                    background-color: ${variant === "contained"
                        ? "var(--accent)"
                        : "white"};
                    color: ${variant === "contained"
                        ? "white"
                        : "var(--contrast-secondary)"};
                    ${fullWidth
                        ? "width: 100%; padding-right: 0; padding-left: 0"
                        : ""}
                }
            `}</style>
        </>
    );
}

export default Button;
