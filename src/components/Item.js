import React, {Component} from 'react';

export class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="col-md-2 text-left">

            <div className="App-Api" >
                {this.props.id} - {this.props.title}
                
            </div>
            <small>{this.props.body}</small>
            </div>
        );
    }
}
 
