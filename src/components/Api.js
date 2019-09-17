import React, {Component} from 'react';
import axios from 'axios';

export class Api extends Component{

    constructor(props) {
        super(props);
        this.state = {posts: []};
    }
   

    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
            console.log(response.data);
            this.setState({posts: response.data});
            
            })
            .catch(function (error) {
            console.log(error);
            })
    }



    render() {
      return (
          <div className="App-Api" >
    
              {
                  this.state.posts.map(post =>
                      <li key={post.id}>{post.id}</li>
                  )
              }
             
       
        </div>
      );
  }
}