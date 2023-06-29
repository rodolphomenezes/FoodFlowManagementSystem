import * as React/*, { useState }*/ from 'react';
import styles from './styles.module.scss';
/*import { Link } from 'react-router-dom';*/

/*const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Sobre',
        path: '/sobre'
    },
    {
        title: 'Noticias',
        path: '/noticias'
    },
    {
        title: 'Contatos',
        path: '/contatos'
    }
]*/

/*<div className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>*/

const logo = require("../../../assets/user.svg").toString();

export const MenuUserCol1 = () => {
    //const [menuActive, setMenuActive] = useState(false)

    return (
        <div className={styles.menuUserCol1}>
            <div className={styles.user}>
                <img src={logo} alt="logo" />
                <p>Rodolpho Menezes</p>
            </div>

        </div>
    )
}