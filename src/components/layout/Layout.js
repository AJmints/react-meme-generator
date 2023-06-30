import {Outlet, Link } from 'react-router-dom'
import Header from "../Header"

const Layout = () => {
    return (
        <>
        <Header />
        <nav className='nav--bar'>
            <ul className='nav--links'>
                <li>
                    <Link className='nav--link' to="/">Meme Generator</Link>
                </li>
                <li>
                    <Link className='nav--link' to="/box">State Example</Link>
                </li>
                <li>
                    <Link className='nav--link' to='/joke'>Conditional Rendering</Link>
                </li>
                <li>
                    <Link className='nav--link' to='/form'>Form Example</Link>
                </li>
                <li>
                    <Link className='nav--link' to='/signup'>Sign up Example</Link>
                </li>
                <li>
                    <Link className='nav--link' to='/useEffect'>useEffect Example</Link>
                </li>
                <li>
                    <Link className='nav-link' to='/stateEffect'>State and Effects Example</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
    </>
    )
}

export default Layout