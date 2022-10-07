import React, { Component } from 'react'



  class NewComponent extends Component {
    
      constructor(props) {
        super(props)
      
        this.state = {
          Message : 'Welcome Visitor',
          sub : 'Subscribe'
        }
      }

    styles = {
      fontStyle : 'italic',
      color : 'blue',
      
    };

    buttonstyles ={
      fontStyle : 'bold',
      color : 'red',
      
    };

      Buttonchange=()=>{
        this.setState({
          Message : 'Hit the bell icon to receive updates',
          sub : 'Subscribed'
        })
      };
  
    render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.Message}</h3>
          <button 
          onClick={this.Buttonchange} 
          style={this.buttonstyles}>
            {this.state.sub}</button>
      </div>
    )
  }
}

export default NewComponent
