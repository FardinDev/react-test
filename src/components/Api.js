import React, {Component} from 'react';
import axios from 'axios';
import {Item} from './Item';
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
            <div className="row">
                  
              {
                  this.state.posts.map(post =>
                      <Item id={post.id} title={post.title} body={post.body} key={post.id}></Item>
                  )
              }

            </div>
             
       
        </div>
      );
  }
}