import React from 'react';
import './App.css';
import NewComponent from  './components/NewComponent';

class App extends React.Component {

  styles = {
    fontStyle : 'bold',
    color : 'purple',
  };

 
  render() {
    return (
      <div className= 'App'>
        <h1 style={this.styles}> Welcome </h1>
        <NewComponent />
      </div>
    );
  }
}

export default App;
