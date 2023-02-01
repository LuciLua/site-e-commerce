import { useState } from "react"
import styles from "../styles/Admin.module.scss"
import axios from "axios"

function Admin() {

    const [product, setProduct] = useState<any>([])

    const insertDataOnProduct = (input) => {
        if (input != null || input != undefined) {
            switch (input.name) {
                case ('name'):
                    setProduct({ ...product, name: input.value })
                    break
                case ('price'):
                    setProduct({ ...product, price: input.value })
                    break
                case ('stars'):
                    setProduct({ ...product, stars: input.value })

                    break
                case ('img'):
                    setProduct({ ...product, img: input.value })
                    break
                case (null || undefined):
                    break
            }
        } else {
            axios.post('./api/utils/submitProduct', product)
            console.log(product)

        }
    }

    return (<>
        <form className={styles.form} method="post">
            <input name="name" onChange={e => insertDataOnProduct(e.target)} type="text" placeholder="name" />
            <input name="price" onChange={e => insertDataOnProduct(e.target)} type="text" placeholder="price" />
            <input name="stars" onChange={e => insertDataOnProduct(e.target)} type="text" placeholder="stars" />
            <input name="img" onChange={e => insertDataOnProduct(e.target)} type="text" placeholder="img" />
            <button type="submit" onClick={(e) => { e.preventDefault(); insertDataOnProduct(null) }}>Send</button>
        </form></>)

}

export default Admin