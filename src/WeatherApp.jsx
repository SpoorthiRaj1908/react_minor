import { useState } from "react"
import InfoBox from "./InfoBox.jsx"
import SearchBox from "./SearchBox"
import { info } from "./infobox.js";
import "./WeatherApp.css"
export default function WeatherApp()
{
    const [weatherinfo,setweatherinfo]=useState({...info});
    let updateweather=(newinfo)=>{
        setweatherinfo(newinfo);
    }
    return(
        <div className="weather">
            <h2>Weather App</h2>
            <SearchBox updateweather={updateweather}></SearchBox><br></br><br></br>
            <InfoBox info={weatherinfo}></InfoBox>
        </div>
    )
}