function toggleMenu(menuopen: any, menu_ul_l: any, styles: any, setMenuopen: any) {

    menuopen ? menu_ul_l.current.classList.add(styles.active) : menu_ul_l.current.classList.remove(styles.active)
    menuopen ? setMenuopen(false) : setMenuopen(true)
}

export { toggleMenu }