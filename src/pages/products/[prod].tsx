import { useEffect, useState } from "react"
import styles from "../../styles/products/product.module.scss"

type ProductProps = {
    id: number,
    name: String,
    price: number
}

function Product() {
    const [product, setProduct] = useState<ProductProps>(Object)

    useEffect(() => {
        fetchProductsById()
    }, [])

    
    function getIdbyPath(){
        const url = window.location.pathname
        var finalPathId:any = url.slice(10)
        let id = finalPathId - 1
        return id
    }

    async function fetchProductsById() {
        const id = getIdbyPath()
        await fetch('/data/products.json')
            .then(resp => resp.json())
            .then(resp => resp.products[id])
            .then(resp => setProduct(resp))
            
    }


    return (
        <>
        <div className={styles.c_products}>
            <div className={styles.product}>
            <p>product id: {product.id}</p>
            <p>product name: {product.name}</p>
            <p>product price: {product.price}</p>
            </div>
        </div>
        </>
    )
}

export default Product