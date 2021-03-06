import { useNavigate, useParams } from "react-router-dom"

//C'est une fonction HOC => qui récupère un composant et renvoie un nouveau à partir de l'ancien
export const withRouter = (Component) => {
    //Ajouter les propriétés nécessaires pour la navigation
    const NewComponent = (props) => {
        const navigate = useNavigate()
        const params = useParams()
        return(
            <Component {...props} navigate={navigate} params={params}></Component>
        )
    }
    return NewComponent
}