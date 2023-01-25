import { useEffect, useState } from "react"
import styles from "./SearchBar.module.scss"

function SearchBar({ setQuery, setVisibleResultsFound }) {


    useEffect(() => {

    }, [])

    const [tempQuery, setTempQuery] = useState<string>("")

    function sendToQuery() {
        setQuery(tempQuery)
        setVisibleResultsFound(true)
    }


    return (
        <form className={styles.search}>
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
            <input
                type="text"
                placeholder="Procure por produtos"
                onChange={(e) => { setTempQuery(e.target.value) }} />
            <button type="submit" onClick={(e) => {e.preventDefault(); sendToQuery()}}>
            <img src="img/search.svg" alt="" />
        </button>
        </form >
    )
}

export default SearchBar