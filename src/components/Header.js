export default function Header() {
    return (
        <header className="header">
            <img 
                src={require("../images/troll.png")}
                className="header--image"
                alt=""
            />
            <h2 className="header--title">Another Meme Generator</h2>
            <h4 className="header--project">Learning React</h4>
        </header>
    )
}