import React from "react";
import{BrowserRouter,Route,Routes} from "react-router-dom"
import { Home } from "./Home";
import { PetrolCost } from "./PetrolCost";
import { Nav } from "./Nav";
import { Speedometer } from "./Speedometer";
import { Batting } from "./Batting";
import { Bowling } from "./Bowling";
 export const Landing=()=>{
    return(

        <BrowserRouter>
        <Nav/>
        <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/PetCost"  element={<PetrolCost/>}/>
        <Route path="Speedo"  element={<Speedometer/>}/>
        <Route path="/batting"  element={<Batting />}/>
        <Route path="/bowling"  element={<Bowling />}/>
       
        </Routes>
        </BrowserRouter>
    )
}