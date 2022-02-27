import React from 'react'

import {Box, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography} from '@mui/material'


function App() {
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
   <Button  fullWidth sx={{backgroundColor:'black',height:'50px',color:'white' }}>Reset Password</Button>
   </Grid>

   <Grid item>
   <Button  fullWidth sx={{backgroundColor:'black',color:'white',height:'50px'}}>Back</Button>
   </Grid>
   
   
   
  </Grid>
  </Container>
  
  </Box>
 
  
  </Container>

  </React.Fragment>

 
 
 )
  }
  export default App;