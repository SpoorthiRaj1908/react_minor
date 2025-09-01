import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import getweather from "./Weather.js"
export default function SearchBox({updateweather})
{
    let [city,setcity]=useState("");
    let [err,seterr]=useState(false);
    let handlechange=(event)=>{
        setcity(event.target.value);
    }
    let handlesubmit=async(event)=>{
        try{
             event.preventDefault();
       let newinfo= await getweather(city);
       seterr(false);
       updateweather(newinfo);
        setcity("");
        }
        catch(err)
        {
            seterr(true);
        }
       

    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handlesubmit}>
               <TextField id="city" label="City Name" variant="outlined" value={city} required onChange={handlechange}/><br></br><br></br><br></br>
                    <Button variant="contained" type='submit' >Search</Button>
                    {err && <p style={{color:"red"}}>no such place found!</p>}
            </form>
        </div>
    )
}