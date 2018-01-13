import React, { Component } from 'react';

class FirstComponent extends Component {

  handleInput = (e) => {
    e.preventDefault();
    let newName = this.name.value;
    this.props.changeName(newName);
    this.name.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={ e => this.handleInput(e) }>
          <input type="text" ref={input => this.name = input}/>
          <button>Change Name</button>
        </form>
      </div>
    );
  }
}

export default FirstComponent;
