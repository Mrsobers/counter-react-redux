import React from 'react';
import './App.css';

import {connect} from 'react-redux'

import {increment,decrement} from './redux/actions'

class App extends React.Component {

  increment = ()=> {
    const number = this.select.value*1;

    this.props.increment(number);
  }

  decrement = ()=> {
    const number = this.select.value*1;

    this.props.decrement(number);
  }

  incrementOdd = ()=> {
    const number = this.select.value*1;

    const count = this.props.count;

    if(count%2===1){
      this.props.increment(number);
    }
  }

  incrementAsync = ()=> {
    const number = this.select.value*1;

    setTimeout(()=>{
      this.props.increment(number);
    },1000)
  }

  render(){
    const {count} = this.props;
    return (
      <div className="App">
        <p>click {count} times</p>
        <div>
          <select ref={select => this.select = select}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementOdd}>increment if odd</button>&nbsp;
          <button onClick={this.incrementAsync}>increment async</button>&nbsp;
        </div>
      </div>
    );
  }
  
}

export default connect(state=>({count:state}),{increment,decrement})(App);
