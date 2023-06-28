import {Outlet, Link } from 'react-router-dom'
import Header from "../Header"

const Layout = () => {
    return (
        <>
        <Header />
        <nav className='nav--bar'>
            <ul className='nav--links'>
                    <Link to="/">Meme Generator</Link>
            </ul>
            <ul className='nav--links'>
                    <Link to="/box">Box thing</Link>
            </ul>
        </nav>
        <br /><br />

        <Outlet />
    </>
    )
}

export default Layout