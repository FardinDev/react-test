import React, {Component} from 'react';
import logo from '../logo.svg';
import { Counter } from './Counter';

export class Header extends Component{
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           {this.props.data.b}
          </p>
          <p>
           {this.props.data.a}
          </p>
          <Counter />
        </header>
      );
  }
}
  
export class Header2 extends Component{
  render() {
    return (
      <header className="App-header">
        <p>
         {this.props.data.b}
        </p>
        <p>
         {this.props.data.a}
        </p>
      </header>
    );
}
};