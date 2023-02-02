import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "../../styles/products/product.module.scss"

type ProductProps = {
    _id: String,
    name?: String,
    price?: number
    stars?: any
    img?: string
}

function Product() {
    const [product, setProduct] = useState<ProductProps>(Object)

    useEffect(() => {
        fetchProductsById()
    }, [])


    async function getIdbyPath() {
        const url = await window.location.pathname
        var finalPathId = await url.slice(10)
        finalPathId = decodeURI(finalPathId)

        await axios.post('/api/utils/findOneProduct', { name: finalPathId })
            // await axios.post('/api/utils/findOneProduct', { name: "sorveteLoco" })
            .then(resp => resp.data)
            .then(resp => setProduct({ ...product, ...resp }))

        return product
    }

    async function fetchProductsById() {

        const id: any = await getIdbyPath()
        console.log(id)
        return id.name
    }


    return (
        <>
            <div className={styles.c_products}>
                <div className={styles.product}>
                    <p>product id: {product._id}</p>
                    <p>product name: {product.name}</p>
                    <p>product price: {product.price}</p>
                    <p>product stars: {product.stars}</p>
                    <div>
                        <Image src={product.img} fill={true} alt={`${product.name}`} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product