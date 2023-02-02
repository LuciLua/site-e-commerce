import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import Stars from "../MenuCategories/Stars/Stars"
import styles from "./MainProducts.module.scss"

function MainProducts({ dataProducts }) {

    const [products, setProducts] = useState([])


    useEffect(() => {
        fetchProducts()
    }, [])

    function fetchProducts() {
        setProducts(dataProducts)
    }

    function convertToInt(price: String) {

        let newPrice: any = Number(price)

        newPrice = Math.floor(newPrice)
        newPrice = newPrice.toPrecision(2)

        return newPrice

    }
    function convertToCent(price: String) {
        let newPrice: any = Number(price)

        newPrice = newPrice.toFixed(2).slice(-2)

        return newPrice
    }

    return (
        <div className={styles.mainProducts}>
            <div className={styles.c_products}>
                {
                    products.map(p => {
                        return (
                            <Link href={`/products/${p.name}`} key={p.name}>
                                <div className={styles.product}>
                                    <div className={styles.c_img}>
                                        <img src={p.img} alt="" />
                                    </div>
                                    <div className={styles.c_info}>

                                        <p className={styles.name}>
                                            {p.name}
                                        </p>
                                        <div className={styles.stars}>
                                            <Stars howManyStars={p.stars} />
                                            {p.stars}
                                        </div>
                                        <p className={styles.price}>
                                            <span className={styles.cifrao}>R$</span>
                                            <span className={styles.int}>
                                                {convertToInt(p.price)}
                                            </span>
                                            <span className={styles.end}>
                                                {convertToCent(p.price)}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainProducts