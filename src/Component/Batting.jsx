import React from "react";
import { Card,CardContent,Button } from "@mui/material";
import { CricAction } from "./CricAction";
export const Batting=()=>{
    return(
   <Card>
      <CardContent>
        <Button variant="contained" color="success">
            Batting
        </Button>
        <CricAction />
      </CardContent>
   </Card>
    )
}