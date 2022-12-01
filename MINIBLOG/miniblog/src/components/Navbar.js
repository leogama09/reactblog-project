import { NavLink } from "react-router-dom"

import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to="/" classname={styles.brand}>
        Mini <b>BLOG</b>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar