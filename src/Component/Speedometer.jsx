import React ,{useState,useEffect}from "react";
import { Grid,TextField,Card,CardContent,Button } from "@mui/material";

 export const Speedometer=()=>{
const[speed,setSpeed]=useState(0);
const[clr, setClr]=useState("gray");
useEffect(()=>{
           if(speed>0 && speed<=20){
            setClr("gray")
           } else if(speed>20 && speed<=40){
            setClr("green")
           } else if(speed>40 && speed<=70){
            setClr("yellow")
           } else{
            setClr("red")
           }
        },[speed])

    return(
       <Grid container spacing={2}>
        <Grid item xs={6}>
  <TextField onChange={(e)=>setSpeed(e.target.value)}
  type="number"
   variant="outlined" fullWidth label="Enter Speed" />      
        </Grid>

        <Grid item xs={2}>
         <Button onClick={()=>setSpeed(25)} sx={{height:55}}
          variant="contained" fullWidth>
          25
         </Button>
        </Grid>

        <Grid item xs={2}>
         <Button onClick={()=>setSpeed(60)} sx={{height:55}}
          variant="contained" fullWidth>
          60
         </Button>
        </Grid>


        <Grid item xs={2}>
         <Button onClick={()=>setSpeed(90)} sx={{height:55}}
          variant="contained" fullWidth>
          90
         </Button>
        </Grid>


       <Grid item xs={12}>
        <Card sx={{
            height:450,
            textAlign:"center",
            borderRadius:100,
            bgcolor:clr,  
            
        }}>
            <CardContent>
                            Speedo-o-meter-{speed}
            </CardContent>
        </Card>
       </Grid>


       </Grid>
    )
}