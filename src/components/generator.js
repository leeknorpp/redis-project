import React, { Component } from 'react';
import axios from 'axios';
import { redisServer } from './redis_server';

export default class Generator extends Component {
    constructor() {
        super();

        this.state = {
            slug: "sample",
        }
        this.getUrlSlug = this.getUrlSlug.bind(this);
    }

getUrlSlug() {
    axios.get("https://www.random.org/strings/?num=1&len=10&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new")
    .then((response) => {
        this.setState({
            slug: response.data
        });
    })
        .catch((error) => {
            console.log("getUrlSlug error!", error);
        })
}



  render() {
    return (
      <div className='generator'>
        { redisServer() }
        <h1>{ this.state.slug }</h1>
        <button onClick={ this.getUrlSlug }>Generate</button>
      </div>
    );
  }
}
