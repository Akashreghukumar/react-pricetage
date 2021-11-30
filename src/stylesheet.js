//import React from 'react'

//import Button from '@mui/material/Button';
//import Button from 'material-ui/core/Button';
 import React, { Component } from 'react'  
//  import { ButtonGroup } from '@material-ui/core';
//  import Button from '@material-ui/core/Button'; 
//  import SaveIcon from '@material-ui/icons/Save'
 import {Container} from '@material-ui/core'
 import {Grid} from '@material-ui/core'
 import {Paper} from '@material-ui/core'
 //import { Checkmark } from 'react-checkmark'
 import { AiOutlineCheck } from "react-icons/ai";
 import { AiOutlineClose } from "react-icons/ai";
 import './mystyle.css';
 import Con from './card'
import { render } from '@testing-library/react';

function Stylesheet(){
    render()
        return(
            <div>
             
                <div className="bg-color"> 
                <h1>Price List Tag from style</h1>
                
    
    {/* <Container style={{
        // backgroundColor:"grey",
        
        
    }}> */}
    
    <div>
    <Grid container spacing={5} justify="center">
    
        <Con price="0" one='Single' two='5' seven='Free' ></Con>


        <Con price="9" one='Unlimited' two='50' seven='Free'></Con>
        <Con price="49" one='Unlimited' two='150' seven='Unlimited'></Con>
    
    </Grid>
    
    {/* <Grid container spacing={5} justify="center">
    
    <Grid>
        <Paper style={{
            height:600,
            width:400,
        }}>
            <p>Free</p>
            <h1>$0 <sub>/month</sub></h1>
            <hr></hr>
            <div>
                
                <span> <AiOutlineCheck color='blue'/> Single User</span><br></br>
                <span> <AiOutlineCheck color='blue'/> 5GB Storage</span><br></br>
                <span> <AiOutlineCheck color='blue'/> Unlimited Public Projects</span><br></br>
                <span> <AiOutlineCheck color='blue'/> Community Access</span><br></br>
                <span> <AiOutlineClose color='blue'/> Unlimited Private Projects</span><br></br>
                <span> <AiOutlineClose color='blue'/> Dedicated Phone Support</span><br></br>
                <span> <AiOutlineClose color='blue'/> Free Subdommine</span><br></br>
                <span> <AiOutlineClose color='blue'/> Monthly Status Report</span><br></br> 
            </div>
        
        </Paper>
    </Grid>
    
    
        
        
        </Grid >  */}
    
    </div>
    
       
        
    
        
    
    {/* </Container> */}
    
    
    
    
    
    
    
    
    {/* <ButtonGroup >
    
    <Button 
    
                startIcon={<SaveIcon/>}
    
                onClick={()=>{
                    alert("Do you watn to save")
                }} 
                variant='contained'
                 color="primary"
                 style={{
                     fontSize:20
                 }}
                 >Save</Button>
    
    
    <Button 
                onClick={()=>{
                    alert("Are you want to delete")
                }} 
                variant='contained'
                 color="primary"
                 style={{
                     fontSize:20
                 }}
                 >Delete</Button>
    
    
    </ButtonGroup> */}
          
    
    
                </div>
                
            </div>
        );




    }





export default Stylesheet  


// import React, { Component } from 'react'  
// import Button from '@material-ui/core/Button';  
// export class Form extends Component {  
//         render() {  
//                 return (  
//                         <div>  
//                                 <Button variant="contained" color="primary">  
//                                      Material UI  
//                                 </Button>  
//                         </div>  
//                 )  
//         }  
// }  
// export default Form  
