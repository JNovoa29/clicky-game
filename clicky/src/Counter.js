import React, { Component, Fragment } from 'react';
import './App.css';

// const App = () => (
//   <Fragment />
// )

class Counter extends Component {
state = {
   count: 0
}

handleIncrement = () => {
  this.setState({count: this.state.count + 1})
}

  render () {
    return (
      <Fragment>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Click Me!</button>
      </Fragment>
    )
  }
}


//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default Counter;
