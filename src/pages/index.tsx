import MenuCategories from "../components/MenuCategories/MenuCategories"

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

            <div className="search">
                <div className="cat-search">
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