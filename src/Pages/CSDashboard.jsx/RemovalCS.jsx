import React from 'react'

export default function RemovalCS() {
  return (
    <div className='p-3'>
      <div className='flex justify-content-center mb-8'>
        <input className='w-96 mx-4  p-2' placeholder='Enter Registration , Engine or  Chachis Number ' />
        <button className='theme_btn_md mx-4 rounded'>Search</button>
      </div>
      <div className='flex grid lg:grid-cols-2 gap-x-2 md:grid-cols-1'>

        <div className=' flex flex-col justify-center space-y-3'>
          <div className='flex justify-center my-2'><p className='text-start text-sm' style={{ width: "40%" }}> Nature of Alert</p><select class='custum_input  ml-4 p-1' style={{ width: "55%" }}>
            <option value="1">Removal</option>
            <option value="2">Redo</option>
            <option value="3">Removal Transfer</option>
          </select>
          </div>
          <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Customer Name :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
          <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Customer Number :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
          <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Registration Number:</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
          <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Sales Person :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
          <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Technichain :</p><input className=' ml-3 p-1 custum_input cursor-not-allowed' style={{ width: "55%" }} /> </div>
        </div >
        <div className='space-y-3'>
          <div className=' flex flex-col justify-center space-y-3'>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Engine Number :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Chassis Number :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Install Location :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Date :</p><input type="date" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Remarks :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
          </div>
        </div>
      </div>
      <button className='theme_btn_md rounded-0 float-end my-3'>Submit</button>
    </div>
  )
}
