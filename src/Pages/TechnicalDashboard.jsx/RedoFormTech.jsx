import React from 'react'

export default function RedoFormTech() {
  return (
    <div className='p-3'>
      <div className='flex justify-content-center my-3 mb-5'>
        <input className='w-96 mx-4  p-2 custum_input' placeholder='Enter Registration ' />
        <button className='theme_btn_md rounded-0 '>Search</button>
      </div>
      <div className='flex grid lg:grid-cols-2 md:grid-cols-1 gap-x-4'>
        <div className=' flex flex-col justify-center'>
          <div className='flex justify-center my-2'><p className='text-end md:text-start text-sm' style={{ width: "40%" }}> Customer Name :</p><input className=' ml-3 custum_input  p-1  cursor-not-allowed' style={{ width: "55%"}} /> </div>
          <div className='flex justify-center my-2'><p className='text-end md:text-start text-sm' style={{ width: "40%" }}> Customer Number :</p><input className=' ml-3 custum_input p-1 ' style={{ width: "55%" }} /> </div>
          <div className='flex justify-center my-2'><p className='text-end md:text-start text-sm' style={{ width: "40%" }}> Registration Number:</p><input className=' ml-3 custum_input  p-1  cursor-not-allowed' style={{ width: "55%" }} /> </div>
          <div className='flex justify-center my-2'><p className='text-end md:text-start text-sm' style={{ width: "40%" }}> Sales Person :</p><input className=' ml-3 custum_input  p-1  cursor-not-allowed' style={{ width: "55%" }} /> </div>
          <div className='flex justify-center my-2'><p className='text-end md:text-start text-sm' style={{ width: "40%" }}> Technecian :</p><input className=' ml-3 custum_input  p-1  cursor-not-allowed' style={{ width: "55%" }} /> </div>
          <div className='flex justify-center my-2'><p className='text-end md:text-start text-sm' style={{ width: "40%" }}> Charges :</p><input className=' ml-3 custum_input p-1 cursor-not-allowed' style={{ width: "55%" }} /> </div>
          <div className='flex justify-center my-2'><p className='text-end md:text-start text-sm' style={{ width: "40%" }}> Old Device :</p><input className=' ml-3 custum_input p-1 cursor-not-allowed' style={{ width: "55%" }} /> </div>
          <div className='flex justify-center my-2'><p className='text-end md:text-start text-sm' style={{ width: "40%" }}> New Device :</p><input className=' ml-3 custum_input p-1 ' style={{ width: "55%" }} /> </div>
        </div >
        <div className='space-y-3'>
          <div className='flex justify-between ' >
            <div className='w-50 text-sm'>
              Harness Changed
            </div>
            <div className='flex justify-between space-x-5'>
              <div class="form-check">
                <input class="border" type="radio" name="flexRadioDefault" />
                <label class="ml-3" for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input class="border" type="radio" name="flexRadioDefault" />
                <label class="ml-3" for="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className='flex justify-between ' >
            <div className='w-50 text-sm'>
              Backup Battery Changed
            </div>
            <div className='flex justify-between space-x-5'>
              <div class="form-check">
                <input class="border" type="radio" name="flexRadioDefault" />
                <label class="ml-3" for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input class="border" type="radio" name="flexRadioDefault" />
                <label class="ml-3" for="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className='flex justify-between ' >
            <div className='w-50 text-sm'>
              Mobilizer
            </div>
            <div className='flex justify-between space-x-5'>
              <div class="form-check">
                <input class="border" type="radio" name="flexRadioDefault" />
                <label class="ml-3" for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input class="border" type="radio" name="flexRadioDefault" />
                <label class="ml-3" for="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className='flex justify-between ' >
            <div className='w-50 text-sm'>
              Operational Status
            </div>
            <div className='flex justify-between space-x-5'>
              <div class="form-check">
                <input class="border" type="radio" name="flexRadioDefault" />
                <label class="ml-3" for="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input class="border" type="radio" name="flexRadioDefault" />
                <label class="ml-3" for="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className=' flex flex-col justify-center space-y-3'>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Engine Number :</p><input className=' ml-3 custum_input p-1 ' style={{ width: "55%" }} /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Chassis Number :</p><input className=' ml-3 custum_input p-1 ' style={{ width: "55%" }} /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Install Location :</p><input className=' ml-3 custum_input p-1 ' style={{ width: "55%" }} /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Remarks :</p><input type="date" className=' ml-3 p-1 ' style={{ width: "55%" }} /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Remarks :</p><input className=' ml-3 custum_input p-1 ' style={{ width: "55%" }} /> </div>
          </div>
        </div>
      </div>
      <button className='theme_btn_md rounded-0 float-end my-3'>Submit</button>
    </div>
  )
}
