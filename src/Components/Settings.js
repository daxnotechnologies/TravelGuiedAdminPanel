import React, { useState } from 'react'
import pf from '../assets/pf.jpg';
import Pmodel from './Pmodel';


function Settings() {
  const [open, setopen] = useState(false)


  return (
    <>

      <div className=' rounded-[8px]   top-20  font-Poppins
 '>
        <div className='flex'>
          <p className='m-10 text-2xl  font-bold  '>Admin Profile</p>

        </div>
        <div className=''>
          <div className='flex justify-end mr-5'>
            <button type="button" class=" text-white bg-[#363740]  font-medium rounded-lg text-sm px-5 py-2.5 " onClick={() => { setopen(true) }} >Edit Profile</button>
            {open && <Pmodel
              close={setopen}
            />}
          </div>
          <div className='flex m-5'>
            <img class="w-[200px] h-[200px] m-2   rounded-full" src={pf} alt="Neil image" />
            <div className='flex flex-col text-xl font-medium justify-evenly '>

              <label className='text-[#6d6a6a]'> <label className='  text-black '>Name: </label>Emma Watson</label>
              <label className='text-[#6d6a6a]'> <label className=' text-black'>Email: </label>emma@gmail.com</label>
              <label className='text-[#6d6a6a]'>  <label className=' text-black'>Address: </label>7485 Second Rd.Powder Springs, GA 30127</label>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Settings