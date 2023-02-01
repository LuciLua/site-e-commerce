import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import styles from "./Header.module.scss"

function Header() {

    const menu_ul_l = useRef(null)
    const [menuopen, setMenuopen] = useState(false)

    useEffect(() => {
        toggleMenu()
    }, [])
    
    function toggleMenu() {
        menuopen ? setMenuopen(false) : setMenuopen(true)
        menuopen ? menu_ul_l.current.classList.add(styles.active) : menu_ul_l.current.classList.remove(styles.active)
    }

    return (
        <div className={styles.c_menu}>
            <ul className={styles.menu_ul_l} ref={menu_ul_l}>
                <li><Link onClick={() => toggleMenu()} href="/">Início</Link></li>
                <li><Link onClick={() => toggleMenu()} href="/about">Sobre</Link></li>
                <li><Link onClick={() => toggleMenu()} href="/sorvetes">Sorvetes</Link></li>
                <li><Link onClick={() => toggleMenu()} href="/contact">Contato</Link></li>
                <li><Link onClick={() => toggleMenu()} href="/admin">Admin</Link></li>
            </ul>
            <ul className={styles.menu_ul_r}>
                <li id="carrinho">
                    <Link href="/">
                        <img src="img/basket.svg" alt="" />
                    </Link>
                </li>
                <li id="user">
                    <Link href="/">
                        <img src="img/person-circle.svg" alt="" />
                    </Link>
                </li>
                <li className={styles.li_l_m} onClick={() => toggleMenu()}>
                    <img src="img/list.svg" alt="" />
                </li>
            </ul>
        </div>
    )
}

export default Header