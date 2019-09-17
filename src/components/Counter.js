import React, {Component} from 'react';

  
export class Counter extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0
        }
    }

    BtnClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return (
        <div>
            <div>Count: {this.state.count}</div>
            <button className="btn" onClick={this.BtnClick}>
                    Increase 
            </button>
        </div>
        
    );
}
};