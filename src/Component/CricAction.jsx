import React,{useState} from "react";
import { Grid,Card,CardContent } from "@mui/material";



export const CricAction=()=>{
  const [isbat,setIsbat] =useState(true)

    return(
           <Card>
             <CardContent>
                {
                    isbat ?
                
               <img src="img/bat.jpg"  />
               :
               <img src="img/ball.jpg"  />
                }
                
             </CardContent>
           </Card>
    )
}