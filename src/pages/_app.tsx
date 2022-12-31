import Header from "../components/Header/Header"
import "../styles/globals.scss"

function App({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    )
}

export default App