import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CS_Sidebar from '../../Components/CS_Sidebar';

export default function AddUserCS() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [option, setOption] = useState('');



  const handleVasOptionChange = (e) => {
    setShowAdditionalFields(e.target.value === 'Yes');
  };

  const handleOptionInput = (e) => {
    setOption(e.target.value);
  };

  return (
    <div className='flex h-[100vh] bg-black'>
      {isSidebarOpen && (
        <div className="sidebar"><CS_Sidebar /></div>
      )}
      <div className='bg-white rounded-xl m-2 p-2 w-100 overflow-y-scroll'>
        <button onClick={toggleSidebar}><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz89LS0uWlpaPj4/4+PhfX1/29vawsLAdHR3b29v8/PzExMQzMzOEhIRzc3MPDw+hoaGysrLq6uo8PDwXFxfh4eFkZGRXV1fGxsZGRkaHh4fX19d6enqnp6e7u7sLhoRgAAAChUlEQVR4nO3di1LCQAyF4eWOCIgIqPWC7/+UWhm8jZNs2Z3JJP2/J8gZK+1u02xKAAAAAAAAAAAAAAAAABDfcjWZjfyYTVbLTvl2rwN/Nrv8gBPrYi80ycw33VtXerH9NCvgwbrOAoeciGvrKous9YA31jUWutEC3ltXWOxeSfhgXWCxBzng3Lq+CuZiwivr8iq4EhNurMurYCMm9H2rOJFvGNbVVdHzhJ6f2M4WYsJH6/IqeBQTel03/SSvoYbW5VUwFBOmW+v6it3KAdPRusBiRyVhWlhXWEj+JW29WJdY6EVN6PzhW71GW1vrKgtscwKm1FjXebEmL+DHOtjjhvDHskle+/7JOPa2abofd9jyPpleD/24ztoKBgAAAAAAAAAAPs2b49iPY9PlvVPrbWT9Lqmz0VuHfEOf7QoLpZPm27N1qRdT29hPZtZ1FpjlBPTdJiw3CH+6s66x0J0W0H+zvnbb8P7JzGDwLAdcWtdXgfyp5cq6vApWwS9S7ab4ZF1eBU9iQv8twlqTsHV1VfT8bxj//zD+b2n8+2GEZxoxoOfV75nyXBpgbaH20vr+GCFjfdiDNX4P9mk8/9povzJfwu+Xpvh73q3o7y0AAAAAAAAAAIAjwedE7cbeZiavO836mvt8050/r83vzD25WehL+LmJvme0Zsy+jD+/1GeTwjd1Bq3va7SlXaf+m4SVWdDx53nHn8kef65+hLMRDmJC6+qq6HlCb2um/8jnzPhcNv0mtwl77/JuyZ3e/lv11Q+Bw5+71oOz89x/25UxOML3DSPjDMsenEMa/yzZ5HcNlXsecHJ6pvNrtwMulo2zc7mbbudyAwAAAAAAAAAAAAAAAIBP7y86VZGfUH/eAAAAAElFTkSuQmCC' className='h-8 w-8' /></button>
        <div className='p-3 mt-3'>
          <div className='flex grid lg:grid-cols-2 gap-x-2 md:grid-cols-1'>
            <div className=' flex flex-col  space-y-3'>
              <h1 className='text-lg font-bold bg-black text-white p-2'>User Details</h1>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}>Client ID :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Customer Number :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Father Number:</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Address :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Telephone Residence :</p><input className=' ml-3 p-1 custum_input cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Mobile Number :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> NTN :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> CNIC :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Secondary User :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Relationship Secondary User :</p><input className=' ml-3 p-1 custum_input cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Secondary User Contact :</p><input className=' ml-3 p-1 custum_input cursor-not-allowed' style={{ width: "55%" }} /> </div>
            </div >
            <div className='space-y-3'>
              <div className=' flex flex-col justify-center space-y-3'>
                <h1 className='text-lg font-bold bg-black text-white p-2'>Vehicle Details</h1>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Registration Number :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Engine Number :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Chassis Number :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> CC :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Make :</p><input type="text" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Model :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Year :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Color  :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Chassis Number :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Install Location :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Date :</p><input type="date" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between mb-2'><p className='text-start text-sm' style={{ width: "40%" }}> Remarks :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              </div>
            </div>
            {/* Product Details  */}
            <div className=' flex flex-col justify-center space-y-3'>
              <h1 className='text-lg font-bold bg-black text-white p-2'>Product Details</h1>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}>Insurance Partner :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}>VAS :</p>
                <div className=' ml-3 p-1  flex justify-start space-x-3' style={{ width: "55%" }} >
                  <div className='flex'><input type="radio" className='mr-2' name='vasOption' value='Yes'
                    onChange={handleVasOptionChange} />Yes
                  </div>
                  <div className='flex justify-between'><input type="radio" name='vasOption'
                    value='No'
                    onChange={handleVasOptionChange} className='mr-2' />No </div>
                </div>
              </div>
              {showAdditionalFields && (
                <div className='space-y-2'>
                  <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Location on Call :</p><input type='checkbox' className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                  <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Ignition On :</p><input type='checkbox' className=' ml-3 p-1 custum_input' style={{ width: "55%" }} /> </div>
                  <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Ignition Off :</p><input type='checkbox' className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                  <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Webtrack :</p><input type='checkbox' className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                  <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Geofence Alerts :</p><input type='checkbox' className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                  <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Mobile App :</p><input type='checkbox' className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                  <div className='flex justify-center mb-3'><p className='text-start text-sm' style={{ width: "40%" }}> Over Speed :</p><input type='checkbox' className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                </div>)}
            </div >
            {/* Other Details  */}
            <div className=' flex flex-col justify-center space-y-3'>
              <h1 className='text-lg font-bold bg-black text-white p-2'>Other Details</h1>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}>Campaign Point Allocation :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Dealership :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Dealer Name :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Sales Person :</p><input className=' ml-3 p-1 custum_input cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Installation Location :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Contact Person :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Remarks :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
            </div >
            {/* Payment Details  */}
            <div className=' flex flex-col justify-center space-y-3'>
              <h1 className='text-lg font-bold bg-black text-white p-2'>Payment Details</h1>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}>Campaign Point Allocation :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}>VAS :</p>
                <div className=' ml-3 p-1 text-sm flex justify-start grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 space-x-1' style={{ width: "55%" }} >
                  <div className='flex'><input type="radio" className='mr-2' onChange={handleOptionInput} name="vasOption"  value="cash"  />Cash </div>
                  <div className='flex'><input type="radio" className='mr-2' onChange={handleOptionInput} name="vasOption"  value="rental" />Cash Rental </div>
                  <div className='flex'><input type="radio" onChange={handleOptionInput} name="vasOption"  value="lease"  className='mr-2' />Leasing </div>
                  <div className='flex'><input type="radio" className='mr-2' onChange={handleOptionInput} name="vasOption"  value="demo" />Demo </div>
                  <div className='flex'><input type="radio" className='mr-2' onChange={handleOptionInput} name="vasOption"  value="ipt"  />IPT </div>
                </div>
              </div>
              {option === 'lease' && (
                <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Bank Name :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              )}
              {option === 'demo' && (
                <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Demo Duration :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              )}
              {option === 'ipt' && (
                <>
                <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Vehicle Value :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
                <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Insurance Rate :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
                <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> IPT Premium :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
                <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Insurance Charges :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
                </>
              )}
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Tracker Charges :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Installation Date :</p><input type='date' className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Internal Commission :</p><input className=' ml-3 p-1 custum_input cursor-not-allowed' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> External Commission :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Discount :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} /> </div>
            </div >
          </div>
          <button className='theme_btn_md rounded-0 float-end my-3'>Submit</button>
        </div>
      </div>
    </div>
  )
}
