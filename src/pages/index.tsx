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
            <div className="menu">
                <ul className="ul-l">
                    <li className="li-l-m" onClick={() => "menu()"}><img src="img/list.svg" alt="" /></li>
                    <li className="li-l"><a href="index.html">Início</a></li>
                    <li className="li-l"><a href="about.html">Sobre</a></li>
                    <li className="li-l"><a href="index.html">Sorvetes</a></li>
                    <li className="li-l"><a href="index.html">Contato</a></li>
                </ul>
                <ul className="ul-r">
                    <li className="li-r" id="carrinho"><a href="index.html">
                        <img src="img/basket.svg" alt="" /></a></li>
                    <li className="li-r" id="user"><a href="index.html"><img src="img/person-circle.svg" alt="" /></a></li>
                </ul>
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
                <div className="categories">
                    <div className="cat">
                        <div className="name">
                            <h1>Por classificação</h1>
                        </div>
                        <div className="sub">
                            <label htmlFor="cincoStar">
                                <input className="starCheck" type="checkbox" name="" id="cincoStar" />
                                <div className="stars">
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star-fill.svg" alt="" />
                                </div>
                            </label>
                            <label htmlFor="quatroStar">
                                <input className="starCheck" type="checkbox" name="" id="quatroStar" />
                                <div className="stars">
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star.svg" alt="" />
                                </div>
                            </label>
                            <label htmlFor="tresStar">
                                <input className="starCheck" type="checkbox" name="" id="tresStar" />
                                <div className="stars">
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star.svg" alt="" />
                                    <img src="img/star.svg" alt="" />
                                </div>
                            </label>
                            <label htmlFor="doisStar">
                                <input className="starCheck" type="checkbox" name="" id="doisStar" />
                                <div className="stars">
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star.svg" alt="" />
                                    <img src="img/star.svg" alt="" />
                                    <img src="img/star.svg" alt="" />
                                </div>
                            </label>
                            <label htmlFor="umaStar">
                                <input className="starCheck" type="checkbox" name="" id="umaStar" />
                                <div className="stars">
                                    <img src="img/star-fill.svg" alt="" />
                                    <img src="img/star.svg" alt="" />
                                    <img src="img/star.svg" alt="" />
                                    <img src="img/star.svg" alt="" />
                                    <img src="img/star.svg" alt="" />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="cat">
                        <div className="name">
                            <h1>Por tipo</h1>
                        </div>
                        <div className="sub">
                            <label htmlFor="testUm">
                                <input className="starCheck" type="checkbox" name="" id="testUm" />
                                <div className="stars">
                                    <p>test</p>
                                </div>
                            </label>
                            <label htmlFor="testDois">
                                <input className="starCheck" type="checkbox" name="" id="testDois" />
                                <div className="stars">
                                    <div className="stars">
                                        <p>test</p>
                                    </div>
                                </div>
                            </label>
                            <label htmlFor="testTres">
                                <input className="starCheck" type="checkbox" name="" id="testTres" />
                                <div className="stars">
                                    <div className="stars">
                                        <p>test</p>
                                    </div>
                                </div>
                            </label>
                            <label htmlFor="testQuatro">
                                <input className="starCheck" type="checkbox" name="" id="testQuatro" />
                                <div className="stars">
                                    <div className="stars">
                                        <p>test</p>
                                    </div>
                                </div>
                            </label>
                            <label htmlFor="testCinco">
                                <input className="starCheck" type="checkbox" name="" id="testCinco" />
                                <div className="stars">
                                    <div className="stars">
                                        <p>test</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

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