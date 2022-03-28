import { useParams } from "react-router-dom"
import { foundById } from "../utils/fakedata"
import DetailProductComponent from "../components/DetailProduct"
import { useEffect, useState } from "react"
export const DetailProduct = (props) => {
    const params = useParams()
    // const product = foundById(params.id)
    //Création d'une propriété du state avec l'hook useState
    const [product, setProduct] = useState(undefined)
    const [firstLoad, setFirstLoad] = useState(true)
    
    //componentDidMount
    useEffect(async () => {
        //La fonction est appelé dans chaque etat du cycle du vie du composant
        //Uniquement pour le firstload
        const p = await foundById(params.id)
        setProduct(p)
        setFirstLoad(false)
    }, [firstLoad])

    //On peut avoir plusieurs useEffect
    return(
        <>
            {product ? (<DetailProductComponent product={product}></DetailProductComponent>) : <h1>Aucun produit</h1>}
            
        </>
    )
}