import React, { Component } from 'react';
import FirstComponent from './FirstComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Somebody'
    }
  }

  changeName = (name) => {
    this.setState({
      name: name
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.name}
        <FirstComponent changeName={this.changeName}/>
      </div>
    );
  }
}

export default App;
