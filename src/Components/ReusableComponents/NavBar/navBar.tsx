import './navBarCss.css'
export default function NavBar()
{
    return (
        <div className="nav-bar">
            <div className="logo">
                <h3>Logo</h3>
                </div>
            <ul className="list">
                <li className="list-item">About</li>
                <li className="list-item">Hire Me</li>
                <li className="list-item">Projects</li>
                <li className="list-item">Contact</li>
            </ul>
        </div>
    )
}