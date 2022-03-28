import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponent';
import ThirdComponent  from './components/ThirdComponent';
import { Person } from './components/Person';
import React, { PureComponent } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <FirstComponent></FirstComponent>
//       <SecondComponent></SecondComponent>
//       <ThirdComponent></ThirdComponent>
//       <h2>Liste de personnes</h2>
//       <Person firstName="toto" lastName="tata"></Person>
//       <Person firstName="titi" lastName="minet"></Person>
//     </div>
//   );
// }

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      personnes: [
        {
          firstName: "toto",
          lastName: "tata",
          id: 1
        },
        {
          firstName: "titi",
          lastName: "minet",
          id: 2
        },
      ]
    }
  }

  deletePerson = (id) => {
    //La modification du state peut avoir lieu à l'aide de la méthode setState
    const tmpPersonnes = this.state.personnes.filter(p => p.id != id)
    this.setState({ personnes: tmpPersonnes })
    //On ne peut appeler le setState qu'une fois 
    //this.setState()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <h2>Liste de personnes</h2>
        {/* <Person firstName="toto" lastName="tata"></Person>
        <Person firstName="titi" lastName="minet"></Person> */}
        {this.state.personnes.map((p, index) => {
          return (
            <React.Fragment key={index}>
              <Person personne={p} deletePerson={this.deletePerson} ></Person>
              {/* <Person firstName={p.firstName} lastName={p.lastName} id={p.id} deletePerson={this.deletePerson} ></Person> */}
              {/* <button onClick={e => this.deletePerson(p.id)} >Supprimer</button> */}
            </React.Fragment>
          )
        })
        }
      </div>
    )
  }
}
