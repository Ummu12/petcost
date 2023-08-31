import React from "react";
import { Grid,Button } from "@mui/material";
import { Link } from "react-router-dom";
 
export  const Nav=()=>{
    return(
    <Grid container spacing={2} sx={{marginBottom:3}}>  
     <Grid item xs={2}>

        <Link to="/">
  <Button fullWidth variant="outlined">
   Home
  </Button>
        </Link>
     </Grid>

      <Grid item xs={2}>
        <Link to="/petCost">
            <Button fullWidth variant="outlined">
                Pet Cost
            </Button>
        </Link>

        <Grid item xs={2}>
            <Link to="/speedo">
                <Button fullWidth variant="outlined">
                     Speed-o-meter
                </Button>
            </Link>
        </Grid>

        <Grid item xs={2}>
              <Link to="/batting">
                <Button variant="contained" fullWidth >
                   Batting
                </Button>
              </Link>
        </Grid>

        <Grid item xs={2}>
              <Link to="/bowling">
                <Button variant="contained" fullWidth >
                   Bowling
                </Button>
              </Link>
        </Grid>


      </Grid>
    </Grid>
    )
}