
import React, {useState}from "react";
import { TextField,Button, Grid,Card,CardContent} from "@mui/material";

export const Home=()=>{
    const [fnum,setFnum]=useState(0);
    const[snum,setSnum] =useState(0);
    const[result,setResult]=useState(0);

    return(
    <Grid container spacing={2}>
        <Grid item xs={4}>
 <TextField onChange={(e)=>setFnum(e.target.value)}
 type="number" variant="outlined" label="First Number" fullWidth />
        </Grid>

        <Grid item xs={4}>
 <TextField  onChange={(e)=>setSnum(e.target.value)}
 type="number" variant="outlined" label="Second Number" fullWidth />
        </Grid>

    <Grid item xs={4}>
    <Button onClick={()=>setResult(fnum*snum)}
    sx={{height:55}} variant="contained" color="success" fullWidth>
        Submit
    </Button>
    </Grid>

 <Grid item xs={12}>
   <Card sx={{textAlign:"center",fontSize:50,fontWeight:"bold", color:"white",bgcolor:"maroon"}}>
      <CardContent>
        {result}
      </CardContent>
   </Card>
 </Grid>


    </Grid>
    )

}