import { useEffect, useState } from "react"
import MainProducts from "../components/MainProducts/MainProducts"
import MenuCategories from "../components/MenuCategories/MenuCategories"
import ResultsFound from "../components/ResultsFound/ResultsFound"
import SearchBar from "../components/SearchBar/SearchBar"
import styles from "../styles/Home.module.scss"

function Home() {

    const [query, setQuery] = useState<string>("")
    const [visibleResultsFound, setVisibleResultsFound] = useState<boolean>(false)

    useEffect(() => {

    }), []

    return (
        <>
            <main className={styles.init}>
                <div className={styles.background}>
                    <img src="img/sor.png" alt="" />
                </div>
                <div className={styles.txtInit}>
                    <h1 className={styles.title}>SorveteStore <br /> Compre já o seu!</h1>
                    <h2 className={styles.subtitle}>Geladinho e saboroso</h2>
                </div>
            </main>
            <SearchBar setQuery={setQuery} setVisibleResultsFound={setVisibleResultsFound} />

            {visibleResultsFound ?
                <ResultsFound query={query} setVisibleResultsFound={setVisibleResultsFound} />
                : null}

            <main className={styles.wrapMenuAndMainProducts}>
                <MenuCategories />
                <MainProducts />
            </main>
        </>
    )
}

export default Home