import styles from "./MenuCategories.module.scss"
import Stars from "./Stars/Stars"

function MenuCategories() {
    return (
        <>
            <div className={styles.c_categories}>
                <div className={styles.categories}>
                    <div className={styles.cat_name}>
                        <h1>Por classificação</h1>
                    </div>
                    <div className={styles.cat_sub}>
                        <label htmlFor="5star">
                            <input className={styles.starCheck} type="checkbox" id="5star" />
                            <div className={styles.cat_stars}>
                                <Stars howManyStars={5} />
                            </div>
                        </label>
                        <label htmlFor="4star">
                            <input className={styles.starCheck} type="checkbox" id="4star" />
                            <div className={styles.cat_stars}>
                                <Stars howManyStars={4} />
                            </div>
                        </label>
                        <label htmlFor="3star">
                            <input className={styles.starCheck} type="checkbox" name="" id="3star" />
                            <div className={styles.cat_stars}>
                                <Stars howManyStars={3} />
                            </div>
                        </label>
                        <label htmlFor="2star">
                            <input className={styles.starCheck} type="checkbox" id="2star" />
                            <div className={styles.cat_stars}>
                                <Stars howManyStars={2} />
                            </div>
                        </label>
                        <label htmlFor="1star">
                            <input className={styles.starCheck} type="checkbox" id="1star" />
                            <div className={styles.cat_stars}>
                                <Stars howManyStars={1} />
                            </div>
                        </label>
                    </div>
                </div>
                <div className={styles.categories}>
                    <div className={styles.cat_name}>
                        <h1>Por tipo</h1>
                    </div>
                    <div className={styles.cat_sub}>
                        <label htmlFor="testUm">
                            <input className={styles.starCheck} type="checkbox" name="" id="testUm" />
                            <div className={styles.cat_stars}>
                                <p>test</p>
                            </div>
                        </label>
                        <label htmlFor="testDois">
                            <input className={styles.starCheck} type="checkbox" name="" id="testDois" />
                            <div className={styles.cat_stars}>
                                <div className={styles.cat_stars}>
                                    <p>test</p>
                                </div>
                            </div>
                        </label>
                        <label htmlFor="testTres">
                            <input className={styles.starCheck} type="checkbox" name="" id="testTres" />
                            <div className={styles.cat_stars}>
                                <div className={styles.cat_stars}>
                                    <p>test</p>
                                </div>
                            </div>
                        </label>
                        <label htmlFor="testQuatro">
                            <input className={styles.starCheck} type="checkbox" name="" id="testQuatro" />
                            <div className={styles.cat_stars}>
                                <div className={styles.cat_stars}>
                                    <p>test</p>
                                </div>
                            </div>
                        </label>
                        <label htmlFor="testCinco">
                            <input className={styles.starCheck} type="checkbox" name="" id="testCinco" />
                            <div className={styles.cat_stars}>
                                <div className={styles.cat_stars}>
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