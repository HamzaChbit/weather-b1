import Image from 'next/image'
import React from 'react'

const Weather = ({data}) => {

  return (

 
    <div className='relative  max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>


      <div  className='relative  '>
        <div className='flex flex-col items-center'>
        <p  className='text-9xl   text-white' >{data.main.temp.toFixed(0)}° </p>
          <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}  alt='/'width='100' height='100'/>
          <p className='text-2xl   text-white ' >{data.weather[0].main}</p>
          </div>
       
        </div>



      <div   className='bg-black/30 relative p-8 rounded-xl  text-white px-2.5 '>
        <p className='text-2xl text-center pb-6' >Weather in {data.name}</p>
        <div   className='flex justify-between text-center'>
         <div>
          <p  className='font-bold  text-2xl' >{data.main.feels_like.toFixed(0)}°</p>
          <p   className=' text-xl' >Flees Like</p>

          </div>
         
      
        <div>

          <p  className='font-bold text-2xl   '  >{data.main.humidity}%</p>
          <p   className=' text-xl' >Humidity</p>

        </div>
        <div>

          <p  className='font-bold text-2xl'  >{data.wind.speed.toFixed(0)} MPH</p>
          <p   className=' text-xl'  > Winds</p>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Weather