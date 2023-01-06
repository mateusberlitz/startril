import { useEffect, useState } from "react";

export default function Landing(){
    const [products, setProducts] = useState();

    const loadProducts = () => {
        axios.get('https://localhost:4000/produtos').then(response => setProducts(response.data));
    }

    useEffect(() => {
        loadProducts();
    }, [])

    return(
        <main>
            {
                products ? (
                    products.map(product => <CardProduto name={product.name}>)
                ) : (
                    <Loading/>
                )
            }
        </main>
    )
}