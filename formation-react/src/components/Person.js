//Création d'un componsant avec une const
// export const Person = (props) => {
//     return(
//         <div>
//             Nom : {props.firstName}, Prénom : {props.lastName} 
//         </div>
//     )
// }

// export function Person(props) {
//     return (
//         <div>
//             Nom : {props.firstName}, Prénom : {props.lastName}
//         </div>
//     )
// }

import { PureComponent } from "react";



export class Person extends PureComponent {
    constructor(props) {
        super(props)
        console.log("creating component")
    }
    
    render() {
        return (
            <div>
                Nom : {this.props.personne.firstName}, Prénom : {this.props.personne.lastName}
                <button onClick={e => {this.props.deletePerson(this.props.personne.id)}}>Supprimer</button>
            </div>
        )
    }
    //Dans le cadre d'un pureComponent, ShouldComponentUpdate est déjà appliqué, par contre si on utilise Component, il faut implémenter cette méthode
    // shouldComponentUpdate(nextprops, nextstate) {
    //     return (this.props != nextprops || this.state != nextstate)
    // }
    componentDidUpdate() {
        //Logique métier à chaque mise à jour d'un composant
    }
    componentDidMount() {
        //Logique métier après premier rendu (exemple appelle api rest)
        console.log("component is mounted")
        //.subscribe
    }

    componentWillUnmount() {
        //logique métier à executer avant la désactivation du composant.
        //.unsubscribe
    }
}

