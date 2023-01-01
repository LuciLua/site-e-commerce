import styles from "./MenuCategories.module.scss"

function MenuCategories() {
    return (
        <>
            <div className={styles.c_categories}>
                <div className={styles.categories}>
                    <div className={styles.c_name}>
                        <h1>Por classificação</h1>
                    </div>
                    <div className={styles.c_sub}>
                        <label htmlFor="cincoStar">
                            <input className="starCheck" type="checkbox" name="" id="cincoStar" />
                            <div className={styles.c_stars}>
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
        </>
    )
}

export default MenuCategories