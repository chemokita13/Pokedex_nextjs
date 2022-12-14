//main layout
import Navigation from "../components/nav" // import navigation

import Head from "next/head"

function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div id="top"></div>
            <Navigation />
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Layout