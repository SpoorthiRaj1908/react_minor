const API_URL="https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_API_KEY;

let getweather=async (city)=>{
   
        let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       
    let jsonres=await res.json();
     
    let result={
        city:jsonres.name,
        temp:jsonres.main.temp,
        tempMin:jsonres.main.temp_min,
        tempMax:jsonres.main.temp_max,
        humidity:jsonres.main.humidity,
        feelslike:jsonres.main.feels_like,
        weather:jsonres.weather[0].description,
        hot_img_url: "https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzZXJ0fGVufDB8fDB8fHww",
  cold_img_url:"https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNub3d8ZW58MHx8MHx8fDA%3D",
  rainy_img_url:"https://images.unsplash.com/photo-1626124902047-f3db8b02f740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW5ueSUyMHBsYWNlc3xlbnwwfHwwfHx8MA%3D%3D",




    }
    return result;
  
    
}
export default getweather;