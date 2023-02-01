import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import Stars from "../MenuCategories/Stars/Stars"
import styles from "./MainProducts.module.scss"

function MainProducts() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    // function fetchProducts() {
    //     fetch('/data/products.json')
    //         .then(resp => resp.json())
    //         .then(resp => resp.products)
    //         .then(resp => setProducts(resp))
    // }

    function fetchProducts() {
        axios.get('/api/utils/findAllProduct')
            .then(resp => resp.data )
            .then(resp =>  setProducts([resp]) )
            .then(resp =>  console.log(resp))
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
                                        </div>
                                        <p className={styles.price}>
                                            <span className={styles.cifrao}>R$</span>
                                            {/* <span className={styles.int}>
                                                {(p.price).toFixed(0)}
                                            </span>
                                            <span className={styles.end}>
                                                {(p.price).toFixed(2).slice(-2)}
                                            </span> */}
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