import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"

export default function InfoBox({info}) {
  return (
    <div className="infobox">
      <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }} >
        <CardMedia key={info.city}
          sx={{ height: 140 }}
          image={info.humidity>80?info.rainy_img_url:(info.temp>15?info.hot_img_url:info.cold_img_url)}
          title={info.city}       
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span>
            {info.city}&nbsp;{info.humidity>80?<ThunderstormIcon></ThunderstormIcon>:(info.temp>15?<SunnyIcon></SunnyIcon>:<AcUnitIcon></AcUnitIcon>)}    </span>    
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Feels like: {info.feelslike}°C <br />
            Temp: {info.temp}°C (min: {info.tempMin}°C, max: {info.tempMax}°C) <br />
            Humidity: {info.humidity}%<br></br>
            weather can be described as : <i>{info.weather}</i>
          </Typography>
        </CardContent>
        
      </Card>
      </div>
      
    </div>
  );
}
