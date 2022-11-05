import Link from "next/link" // routes

function Navigation() {
    return (
        <ul>
            <li>
                <Link href="/" legacyBehavior>
                    <a>Index</a>
                </Link>
            </li>
            <li>
                <Link href="/pokemon" legacyBehavior>
                    <a>Pokemon</a>
                </Link>
            </li>
            <li>
                <Link href="/others" legacyBehavior>
                    <a>Others</a>
                </Link>
            </li>
        </ul>
    )
}

export default Navigation