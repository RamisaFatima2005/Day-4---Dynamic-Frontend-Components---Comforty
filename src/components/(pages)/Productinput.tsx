import React from 'react'

export default function ProductInput() {
  return (
    <div>
        <div className="flex flex-col justify-center text-center items-center lg:py-9">
        <p className="font-semibold text-[32px]">Or subscribe to the newsletter</p>
        <div className="flex flex-row bg-transparent text-[#1E2832] space-x-3 md:mt-0 mt-[20px] w-[200px] lg:w-[459px] h-[55px]">
          <input
            type="text"
            placeholder="Email Address..."
            className="bg-transparent border-b-2 border-[#1E2832]  py-[5px] px-[10px] md:py-[10px] md:px-[20px] w-3/5 lg:w-[296px]"
          />
          <button className="border-b-2 border-[#1E2832] py-[5px] md:py-[10px] px-[10px] md:px-[20px] w-2/5">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}