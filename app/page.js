'use client'
import Spinner from "@/competent/Spinner"
import Weather from "@/competent/Weather"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import {BsSearch} from 'react-icons/bs'


export default   function Home() {

  const [city,setCity] = useState('')
  const [weather,setWeather] = useState({})
  const [loading,setLoading] = useState(false)

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}
   `


const fetchWeather = () => {

  setLoading(true);
 
  fetch(url)
  
    .then(response => response.json())
    .then(data => {
      setWeather(data);
     
      
    setLoading(false);
     
    })
  


};



useEffect(() => {
  fetchWeather();
  setCity('')
}, []);



if(loading) {
  return <Spinner/>
}else{

 return (
   <div>
      <div  className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]  " />
    <Image  src='/weatherbg.jpg' layout='fill' className="object-cover"/>
    <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10" >
      <form  onSubmit={fetchWeather}  className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl " >
        <div>
          <input onChange={(e)=>setCity(e.target.value) } className="bg-transparent border-none text-white focus:outline-none text-2xl" type="text" placeholder="Search city" />
        </div>
        <button onClick={fetchWeather}><BsSearch   size={20}/></button>
      </form>
    </div>
    {weather.main && <Weather data={weather} />}
    
   
    </div>)



}



  



 
}
