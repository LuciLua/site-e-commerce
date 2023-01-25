import { useEffect } from "react"
import styles from "./ResultsFound.module.scss"

function ResultsFound({ query, setVisibleResultsFound }) {
    var qntResults = 3

    function renderQueryFound() {
        if (query !== "") {
            return `${qntResults} resultados para "${query}"`
        } else {
            return "nada encontrado, tente pesquisar pelo nome do produto"
        }
    }

    useEffect(() => {
        renderQueryFound()
    }, [])

    return (
        <div className={styles.c_results}>
            {renderQueryFound()}
            <button type="button" onClick={() => { setVisibleResultsFound(false) }}>x</button>
        </div>
    )
}

export default ResultsFound