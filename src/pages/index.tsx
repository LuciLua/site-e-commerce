import MenuCategories from "../components/MenuCategories/MenuCategories"
import SearchBar from "../components/SearchBar/SearchBar"
import styles from "../styles/Home.module.scss"

function Home() {
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
            <SearchBar />
        </>
    )
}

export default Home