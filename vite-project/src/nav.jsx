function Nav({title, links}) {
    return (
        <> {/* an empty tag is for wrapping without adding extra nodes to the DOM */}
        <nav>
            <h1>{title}</h1>
            <ul>
                <li>{links}</li>
                <li>{links}</li>
                <li>{links}</li>
                <li>{links}</li>
            </ul>
        </nav>
        <nav>
            <h1>WEBSITE</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/gallery">Gallery</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav