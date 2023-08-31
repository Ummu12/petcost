import React,{useState} from "react";
import { TextField,Card,CardContent,Button,Grid } from "@mui/material";

 export const PetrolCost=()=>{
    const [fnum,setFnum]=useState(0);
    const[snum,setSnum] =useState(0);
    const[result,setResult]=useState(0);
    return(
       <Grid container spacing={3}>
        <Grid item xs={4}>
<TextField onChange={(e)=>setFnum(e.target.value)}
variant="outlined" fullWidth label="Petrol Price"/>
        </Grid>

 <Grid item xs={4}>

    <TextField  onChange={(e)=>setSnum(e.target.value)}
    variant="outlined" fullWidth label="Tank Filling" />

 </Grid>

 <Grid item xs={4}>
    <Button   onClick={()=>setResult(fnum*snum)}
    sx={{height:55}}
    variant="contained" color="success" fullWidth  >
     SUBMIT
    </Button>
    </Grid>

    <Grid item xs={12}>
   <Card sx={{textAlign:"center",fontSize:50,fontWeight:"bold", 
   color:"white",bgcolor:"yellowgreen"}}>
      <CardContent>
        {result}
      </CardContent>
   </Card>
 </Grid>


       </Grid>
    )
}