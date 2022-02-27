import React from 'react'

import {Box, Button, Container, CssBaseline, Grid, TextField, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: 'black',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover':{
      color: 'black',
      background:"#f5f5f5"
    }
  },
});

function App() {
  const classes = useStyles();
 return(
<React.Fragment>
    <CssBaseline />
<Container maxWidth={'sm'} >

<Box display="flex"  direction="column"
alignItems="center"
justifyContent="center"
style={{ minHeight: '100vh' }}>
<Container >

  <Grid container spacing={2}   justifyContent='center' alignSelf='center' sx={{display: 'flex',flexDirection:'column' ,mt:'8px',mb:'16px' }}>
  
  
  
   <Grid item  maxWidth={'sm'} justifyContent='center' align> <Typography fontWeight='550' gutterBottom variant="h5" component="div">
  Forgot Your Password?
</Typography></Grid>

  <Grid item><Typography fontWeight='500' sx={{ fontSize: 14  }} gutterBottom color="text.secondary" gutterBottom>
  Please Enter the email address associated with your your account and we will eamil you a link to reset your password
  </Typography></Grid>
  <Grid item><TextField fullWidth label="Email address" id="fullWidth" placeholder="demo@minimals.cc"/></Grid>
 


  

   <Grid item>
   <Button className={classes.root} fullWidth >Reset Password</Button>
   </Grid>

   <Grid item>
   <Button className={classes.root} fullWidth >Back</Button>
   </Grid>
   
   
   
  </Grid>
  </Container>
  
  </Box>
 
  
  </Container>

  </React.Fragment>

 
 
 )
  }
  export default App;