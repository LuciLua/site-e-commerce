import axios from "axios"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"
import { type } from "os"
import { useEffect, useState } from "react"
import MainProducts from "../components/MainProducts/MainProducts"
import MenuCategories from "../components/MenuCategories/MenuCategories"
import ResultsFound from "../components/ResultsFound/ResultsFound"
import SearchBar from "../components/SearchBar/SearchBar"
import styles from "../styles/Home.module.scss"


export const getStaticProps: GetStaticProps = async (ctx) => {

    const findAllProducts = await axios.get(`http://siteecommerce.vercel.app/api/utils/findAllProduct`)
    const dataResponse = await findAllProducts.data
    const dataProducts = await dataResponse

    return {
        props: {
            dataProducts: dataProducts
        },
        revalidate: 10
    }

}

function Home({ dataProducts }: InferGetStaticPropsType<typeof getStaticProps>) {

    const [query, setQuery] = useState<string>("")
    const [visibleResultsFound, setVisibleResultsFound] = useState<boolean>(false)

    console.log(dataProducts)

    useEffect(() => {
        // console.log(test)
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
                <MainProducts dataProducts={dataProducts} />
            </main>
        </>
    )
}

export default Home