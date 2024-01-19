function HyperLink({children}) {
    return (
        <a href={children}>{children}</a>
    );
}

export default HyperLink;