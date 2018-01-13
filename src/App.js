import React, { Component } from 'react';
import FirstComponent from './FirstComponent';
import {inject, observer} from 'mobx-react';
import AgeStore from './stores/AgeStore';

@inject('NameStore')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.NameStore.name }
        <FirstComponent NameStore={ this.props.NameStore } AgeStore={AgeStore}/>
      </div>
    );
  }
}

export default App;
