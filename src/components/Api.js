import React, {Component} from 'react';
import axios from 'axios';
import { Item } from './Item';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

export class Api extends Component{

    constructor(props) {
        super(props);
      this.state = {
        posts: [],
        count: 0,
        
      };
      
    }
   


    componentDidMount() {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
            console.log(response.data);
            this.setState({posts: response.data, count: response.data.length});
            
            })
            .catch(function (error) {
            console.log(error);
            })
    }

    BtnClick = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.setState({ posts: this.state.posts.concat(response.data)});
          console.log(this.state.posts);
          this.setState({ count: this.state.posts.length });
        })
        .catch(function (error) {
          console.log(error);
        })
  
  
    }


    render() {
      return (
        <div>
        <div>Count: {this.state.count}</div>
        <Button variant="contained" color="secondary" size="medium" onClick={this.BtnClick} > Call </Button>
      
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
          {this.state.posts.map(function (post, i) {
            
            return <Item id={post.id} title={post.title} body={post.body} random={i} key={i}></Item>
           
          })}       
           
            </Grid>
          </Grid>
    
        </div>
       
      );
  }
}