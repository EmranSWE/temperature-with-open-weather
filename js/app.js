const API_KEY=`ad9c2da2078f8ded49209f8b9f399e19`;

//Main Function
function searchTemperature() {
    const city = document.getElementById('city-name').value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
    city.innerText='';
}

//Set InnerText
const setInnerText=(id,text) =>{
    document.getElementById(id).innerText=text;
}
//Display Temperature
const displayTemperature=(temp)=>{
    setInnerText('city',temp.name);
    setInnerText('temp',temp.main.temp);
    setInnerText('weather',temp.weather[0].main);
    const url=`http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imageIcon=document.getElementById('image-icon');
    imageIcon.setAttribute('src',url)
}