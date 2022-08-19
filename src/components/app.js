import React, { Component } from 'react';
import Generator from './generator';

export default class App extends Component {


  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <Generator />
      </div>
    );
  }
}
