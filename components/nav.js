import Link from "next/link" // routes

function Navigation() {
    return (
        <header className="nav-header">
            <div className="nav-logo">
                <img className='nav-logo-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbReYytwbpM15Ml3vPTItOr8axh16IsmxqA&usqp=CAU" />
            </div>
            <nav>
                <ul className="nav-links">
                
                    <li>
                        <Link href="/" legacyBehavior>
                            <a>Pokedex</a>
                        </Link>
                    </li>
                    
                </ul>
            </nav>
            <a href="https://github.com/chemokita13" className="nav-btn">
                <button>Github</button>
            </a>
        </header>
    )
}

export default Navigation