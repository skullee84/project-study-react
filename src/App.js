import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StepConst from './const/StepConst';

class App extends Component {

  renderLayer = (step) => {
    let data = StepConst[step];
    return (
      <div>
        <img width="300" height="100" src={data.imageUrl} alt="" />
        <p>{data.title}</p>
        <p>{data.content}</p>
        <button onClick={this[data.onClickFunc]}>button</button>
      </div>
    )
  }

  _customClick1 = () => {
    console.log('_customClick1');
  }

  _customClick2 = () => {
    console.log('_customClick2');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <hr />
        {/* props? state? 로 스텝을 넘겨주시면 좋을듯? */}
        {this.renderLayer(0)}
        <hr />
        {this.renderLayer(1)}
        <hr />
      </div>
    );
  }
}

export default App;
