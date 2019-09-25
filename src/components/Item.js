import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import ProgressiveImage from "./ProgressiveImage";
import { Picture } from 'react-responsive-picture';
export class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { classes: {
            root: {
              flexGrow: 1,
            },
            paper: {
                margin: 'auto',
                maxWidth: 300,
              },
              
          }
        }
        
        }
    giveImg = ( key) => {
        return 'https://picsum.photos/id/'+key+'/150/100'
    }
    render() { 
        return (
<React.Fragment>

                <Grid item xs={4}>
                    <div className={this.state.classes.root}>
                        
                    <Paper className={this.state.classes.paper} style={{ padding: '15px' }}>
                            <Grid container spacing={2}>
                            <Grid item>
                            {/* <ProgressiveImage src={this.giveImg(this.props.random)} placeholder={this.giveImg(this.props.random)}>
                            {src => <img src={src} alt="an image" />}
                            </ProgressiveImage> */}
                                    {/* <img className={this.state.classes.img} alt="complex" src={this.giveImg(this.props.random)}/>
                                    <ProgressiveImage
        className={"cover"}
        alt={"woman"}
        overlaySrc={
            this.giveImg(this.props.random)
        }
        src={
            this.giveImg(this.props.random)
        }
      /> */}
                                    <Picture src={this.giveImg(this.props.random)} />
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                    Standard license {this.props.id}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                                    </Typography>
                                </Grid>
                                <Grid item>
                                        <Typography variant="body2" style={{ cursor: 'pointer',color: 'scondary' }   }>
                                    Remove
                                    </Typography>
                                </Grid>
                                </Grid>
                                <Grid item>
                                <Typography variant="subtitle1">$115</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                </div>
                </Grid>
                
</React.Fragment>



            
            // <div className="col-md-2 text-left">

            // <div className="App-Api" >
            //     {this.props.id} - {this.props.title}
                
            // </div>
            // {/* <small>{this.props.body}</small> */}
            // </div>
        );
    }
}
 
