import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    //main div
    <div className='bg-[#FFFFFF] min-h-screen'>
        {/*Heading and paragraph div */}
        <div className='bg-[#FFFFFF] pt-12'>
            <h1 className='text-[#000000] font-semibold text-center'>Get in Touch With Us</h1>
            <p className='text-[#9F9F9F] font-light text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us</p>
            <p className='text-[#9F9F9F] font-light text-center'>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        {/*form div */}
        <div className='flex justify-evenly mt-10'>
            <div>
        {/*address */}
        
            <div>
                <Image height={20} width={20} src={"/Address.svg"} alt='Address'/>
                <h1 className='text-[#000000] font-semibold pl-7'>Address</h1>
                <p className='text-[#000000] font-light'>236 5th SE Avenue,</p>
                <p className='text-[#000000] font-light'> New York NY10000,</p>
                <p className='text-[#000000] font-light'> United States</p>
            </div>
            <div>
                <Image height={20} width={20} src={"/time.svg"} alt='Phone'/>
                <h1 className='text-[#000000] font-semibold pl-7'>Phone</h1>
                <p className='text-[#000000] font-light'>Mobile: +(84) 546-6789</p>
                <p className='text-[#000000] font-light'>Hotline: +(84) 456-6789</p>
            </div>
            <div>
                <Image height={20} width={20} src={"/phone.svg"} alt='Working Time'/>
                <h1 className='text-[#000000] font-semibold pl-7'>Working Time</h1>
                <p className='text-[#000000] font-light'>Monday-Friday: 9:00 - 22:00</p>
                <p className='text-[#000000] font-light'>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
            </div>
                {/*form */}
                <form>
                    <label>Name:</label>
                <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="mt-1 block p-2 border border-gray-300 rounded-md shadow-sm w-48"
          />
          <label>Email:</label>
                <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="abc@gmail.com"
            className="mt-1 block p-2 border border-gray-300 rounded-md shadow-sm w-48"
          />
          <label>Subject:</label>
                <input
            type="text"
            id="name"
            name="name"
            placeholder="This field is optional"
            className="mt-1 block p-2 border border-gray-300 rounded-md shadow-sm w-48"
          />
          <label>Message:</label>
                <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Hi! I'd like to ask about"
            className="mt-1 block p-2 border border-gray-300 rounded-md shadow-sm w-48"
          />
                </form>
            </div>
        </div>
  )
}
