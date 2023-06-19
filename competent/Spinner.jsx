import Image from 'next/image'
import React from 'react'
import loader from '../public/loader.svg'

const Spinner = () => {
  return (
    <div>
        <Image  src={loader} alt='loading ... '  className='w-[200px] m-auto block'/>
    </div>
  )
}

export default Spinner