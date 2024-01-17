import React from 'react'

export default function DeviceInventoryTech() {
    return (
        <div>
            <div className='flex grid lg:grid-cols-2 md:grid-cols-1 my-4'>
                <div className=' flex flex-col justify-between'>
                    <div className='flex justify-center my-2'><p className='text-end md:text-start' style={{ width: "40%" }}>Device Serial No :</p><input className=' ml-3 custum_input  p-1 ' style={{ width: "55%"}} /> </div>
                    <div className='flex justify-center my-2'><p className='text-end md:text-start' style={{ width: "40%" }}> IMEI Number :</p><input className=' ml-3 custum_input p-1 ' style={{ width: "55%" }} /> </div>
                </div>
                <div className=' flex flex-col justify-between'>
                    <div className='flex justify-center my-2'><p className='text-end md:text-start' style={{ width: "40%" }}> Device Sim Number :</p><input className=' ml-3 custum_input  p-1 ' style={{ width: "55%"}} /> </div>
                    <div className='flex justify-center my-2'><p className='text-end md:text-start' style={{ width: "40%" }}> Vendor :</p><input className=' ml-3 custum_input p-1 ' style={{ width: "55%" }} /> </div>
                </div>
            </div >
            <button className='theme_btn_md float-end my-4 rounded-0'>Submit</button>
        </div>
    )
}
