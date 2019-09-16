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
            <button class="btn" onClick={this.BtnClick}>
                    Increase <span class="badge badge-primary"></span>
            </button>
        </div>
        
    );
}
};