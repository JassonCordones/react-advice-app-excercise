import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends React.Component{
  state = {
    advice:''
  };
  componentDidMount(){
    this.fetchAdvice();
  }
  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
      .then((response)=>{
        const {advice} = response.data.slip;
        this.setState({advice})
      })
      .catch((error=>{
        console.log(error);
      }));
  }

  render(){
    const {advice} = this.state;
    return(<div className="app">
      <div className = "card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={this.fetchAdvice}>
          <span className="span">
            GIVE ME ADVICE!
          </span>
        </button>
      </div>
    </div>);
  }
}
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
//     </div>
//   );
// }

export default App;
