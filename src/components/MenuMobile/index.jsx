import React, { useState } from 'react';
import HamburgerMenu from 'hamburger-react';
import styles from './MenuMobile.module.scss';
import { Link } from 'react-router-dom';

export default function MenuMobile() {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    const handleItemClick = (e) => {
        setOpen(false);
    }


    return (
        <>
            <nav>
                <HamburgerMenu
                    toggled={isOpen}
                    toggle={toggleMenu}
                    color="#3f51b5"
                    size={60}
                />
            </nav>
            {isOpen && (
                <ul className={styles.mobileMenu} onClick={handleItemClick}>
                    <Link to="./">
                        <li>Home</li>
                    </Link>
                    <Link to="./sobre">
                        <li>Imoveis</li>
                    </Link>
                    <Link to="./habilidades">
                        <li>Sobre Nos</li>
                    </Link>
                    <Link to="./projetos">
                        <li>Contato</li>
                    </Link>
                </ul>
            )}
        </>
    );
}


