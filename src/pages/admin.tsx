import { useRef, useState } from "react"
import styles from "../styles/Admin.module.scss"
import axios from "axios"
import Link from "next/link"

function Admin() {

    const [product, setProduct] = useState<any>([])
    const form = useRef(null)

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

    function sendIceCream(e) {
        e.preventDefault();
        insertDataOnProduct(null)
        form.current.reset()
        alert('Sorvete cadastrado')
        window.location.pathname = '/'
    }

    return (<>
        <form ref={form} className={styles.form} method="post">
            <input name="name" onChange={e => insertDataOnProduct(e.target)} type="text" placeholder="name" />
            <input name="price" onChange={e => insertDataOnProduct(e.target)} type="text" placeholder="price" />
            <input name="stars" onChange={e => insertDataOnProduct(e.target)} type="text" placeholder="stars" />
            <h3>use imagens do <Link href={`https://unsplash.com/`}>unsplash</Link></h3>
            <input name="img" onChange={e => insertDataOnProduct(e.target)} type="text" placeholder="img" />
            <button type="submit" onClick={(e) => sendIceCream(e)}>Send</button>
        </form></>)

}

export default Admin