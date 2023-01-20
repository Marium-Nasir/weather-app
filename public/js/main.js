let checkbtn = document.getElementById("subbtn");
let searchval = document.getElementById("inputval");
let msgbox = document.getElementById("errorbox");
let getval = document.getElementById("getval");
let mood = document.getElementById("mood");
let ctemp = document.getElementById("ctemp");
let ftemp = document.getElementById("ftemp");
let mintemp = document.getElementById("mintemp");
let maxtemp = document.getElementById("maxtemp");
let cityname = document.getElementById("cityname");
let maincont = document.querySelector(".maincont");


let cheackweather = async(e) =>{
    e.preventDefault();
    let checkval = searchval.value;
    if(checkval == ""){
        msgbox.removeAttribute("hidden")
        if(msgbox.hasAttribute("hidden")==false)
        {
           getval.setAttribute('hidden','true')
        }
    }
else{
    try{
        msgbox.setAttribute('hidden','true')
        if(msgbox.hasAttribute("hidden")==true)
        {
           getval.removeAttribute("hidden")
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${checkval}&appid=23ec207e8079db8fefe833c1c65390f6&units=metric`;
    
        let resdata = await fetch(url);
        let data = await resdata.json()
        let arrdata = [data]
        let temp = arrdata[0].main.temp;
        let flike = arrdata[0].main.feels_like;
        let min = arrdata[0].main.temp_min;
        let max = arrdata[0].main.temp_max;
        let moods = arrdata[0].weather[0].description;
        let country = arrdata[0].sys.country;
        let city = arrdata[0].name;
        ctemp.innerText = `${temp}`;
        ftemp.innerText = `${flike}`;
        mintemp.innerText = `${min}`;
        maxtemp.innerText = `${max}`;
        mood.innerText = `${moods}`;
        cityname.innerText = `${city} , ${country}`;
        if(moods == "haze"){
            maincont.style.backgroundImage = `url("css/images/haze.jpg")`
            e.preventDefault();
        }
        else if(moods == "sunny"){
            maincont.style.backgroundImage = `url("css/images/sunny.webp")`
            e.preventDefault();
        }
        else if(moods == "smoke"){
            maincont.style.backgroundImage = `url("css/images/smoke.jpg")`
            e.preventDefault();
        }
        else if(moods == "rain"){
            maincont.style.backgroundImage = `url("css/images/rain.jpg")`
            e.preventDefault();
        }
        else if(moods == "cloud"){
            maincont.style.backgroundImage = `url("css/images/cloud.jpg")`
            e.preventDefault();
        }
        else {
            maincont.style.backgroundImage = `url("css/images/sunset.jpg")`
            e.preventDefault();
    }
       
        // console.log(moods)

        // console.log(temp,flike,min,max,mood,country,city)
    }catch{
        msgbox.removeAttribute("hidden")
        if(msgbox.hasAttribute("hidden")==false)
        {
           getval.setAttribute('hidden','true')
        }
    }
    
}
   
}

checkbtn.addEventListener("click",cheackweather)