import React, { Component } from 'react'  
import {Grid} from '@material-ui/core'
import {Paper} from '@material-ui/core'
//import { Checkmark } from 'react-checkmark'
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from '@material-ui/core';
import './mystyle.css'


function Con(props){
    return(
        <div>
           {/* <Grid container spacing={5} justify="center"> */}

<Grid>
    <Paper style={{
        height:600,
        width:400,
    }}>
        <p>Free</p>
        <h1>${props.price} <sub>/month</sub></h1>
        <hr></hr>
        <div class='con'>
            
            <span class='innercon'> <AiOutlineCheck color='blue'/> {props.one} User</span><br></br>
            <span class='innercon'> <AiOutlineCheck color='blue'/> {props.two}GB Storage</span><br></br>
            <span class='innercon'> <AiOutlineCheck color='blue'/> Unlimited Public Projects</span><br></br>
            <span class='innercon'> <AiOutlineCheck color='blue'/> Community Access</span><br></br>
            <span class='innercon'> <AiOutlineClose color='blue'/> Unlimited Private Projects</span><br></br>
            <span class='innercon'> <AiOutlineClose color='blue'/> Dedicated Phone Support</span><br></br>
            <span class='innercon'> <AiOutlineClose color='blue'/> {props.seven} Subdommine</span><br></br>
            <span class='innercon'> <AiOutlineClose color='blue'/> Monthly Status Report</span><br></br> 
        </div> 
        <Button variant='contained' color='primary'>Button</Button>
    
    </Paper>
</Grid>


    
    
    {/* </Grid >  */}
        </div>
    );

}

export default Con