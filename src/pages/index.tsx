import MenuCategories from "../components/MenuCategories/MenuCategories"
import SearchBar from "../components/SearchBar/SearchBar"

function Home() {
    return (
        <main>
            <div className="init">
                <div className="back">
                    <img src="img/sor.png" alt="" />
                </div>
                <h1 className="titulo">
                    <p>SorveteStore<br />Compre já o seu!</p>
                    <p id="titulo-g">Geladinho e saboroso</p>
                </h1>
            </div>

            <SearchBar />

            <div className="inter">

                {/* <MenuCategories /> */}

                <div className="products">
                    <div className="align-prod">
                        <div className="pr">
                            <div className="buy" id="teste">
                                <p>Comprar agora</p>
                            </div>
                            <img className="item" src="img/sor.png" alt="" />
                            <div className="carrinho">
                                <p className="carrinhoNow">colocar no carrinho</p>
                            </div>
                        </div>
                        <div className="pr">
                            <div className="buy">
                                <p>Comprar agora</p>
                            </div>
                            <img className="item" src="img/icechoco.png" alt="" />
                            <div className="carrinho">
                                <p className="carrinhoNow">colocar no carrinho</p>
                            </div>
                        </div><div className="pr">
                            <div className="buy">
                                <p>Comprar agora</p>
                            </div>
                            <img className="item" src="img/sor.png" alt="" />
                            <div className="carrinho">
                                <p className="carrinhoNow">colocar no carrinho</p>
                            </div>
                        </div><div className="pr">
                            <div className="buy">
                                <p>Comprar agora</p>
                            </div>
                            <img className="item" src="img/sor.png" alt="" />
                            <div className="carrinho">
                                <p className="carrinhoNow">colocar no carrinho</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home