import styles from "./Header.module.scss"

function Header() {
    return (
        <div className={styles.c_menu}>
            <ul className={styles.menu_ul_l}>
                <li className="li-l-m" onClick={() => "menu()"}>
                    <img src="img/list.svg" alt="" />
                </li>
                <li className="li-l">
                    <a href="index.html">Início</a>
                </li>
                <li className="li-l">
                    <a href="about.html">Sobre</a>
                </li>
                <li className="li-l">
                    <a href="index.html">Sorvetes</a>
                </li>
                <li className="li-l">
                    <a href="index.html">Contato</a>
                </li>
            </ul>
            <ul className={styles.menu_ul_r}>
                <li className={styles.menu_li_r} id="carrinho">
                    <a href="index.html">
                        <img src="img/basket.svg" alt="" />
                    </a>
                </li>
                <li className={styles.menu_li_r} id="user">
                    <a href="index.html">
                        <img src="img/person-circle.svg" alt="" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header