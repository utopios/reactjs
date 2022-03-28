import { useParams } from "react-router-dom"
import { foundById } from "../utils/fakedata"
import DetailProductComponent from "../components/DetailProduct"
export const DetailProduct = (props) => {
    const params = useParams()
    const product = foundById(params.id)
    return(
        <>
            <DetailProductComponent product={product}></DetailProductComponent>
        </>
    )
}