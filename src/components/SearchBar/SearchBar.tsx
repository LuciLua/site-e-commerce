import styles from "./SearchBar.module.scss"

function SearchBar() {
    return (
        <div className={styles.search}>
            <div className={styles.catsearch}>
                <select name="cars" id="cars">
                    <optgroup label="Comestiveis">
                        <option value="volvo">Sorvetes</option>
                        <option value="saab">Picolés</option>
                    </optgroup>
                    <optgroup label="Acessórios">
                        <option value="mercedes">Potinhos</option>
                        <option value="audi">Colheres especiais</option>
                    </optgroup>
                </select>
            </div>
            <input type="text" placeholder="Procure por produtos" />
            <img src="img/search.svg" alt="" />
        </div>
    )
}

export default SearchBar