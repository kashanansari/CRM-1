import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function RemovalCS() {
  const [ErrorPopup, setErrorPopup] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const [removal, setRemoval] = useState({
    form_type: "",
    removal_id: "",
    sales_person: "",
    installation_loc: "",
    registeration_no: "",
    technician_name: "",
    mobileno_1: "",
    engine_no: "",
    chasis_no: "",
    installation_loc: "",
    date_of_installation: "",
    remarks: "",
    device_id:"",
    client_id:""
  });

  const handleClosePopup = () => {
    setErrorPopup(false);
  };


  let value, name;

  const getUserdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setRemoval({ ...removal, [name]: value });
    console.log(removal);
  };

  const getSearchItem = (e) => {
    setSearchTerm(e.target.value)
    console.log(searchTerm)
  }

  const sendData = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: "include",
      body: JSON.stringify({
        search_term: searchTerm,
      }),

    };

    let data;
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/removal_search",
        options
      );
      console.log(response)
      data = await response.json();
      setRemoval({
        form_type: "removal",
        removal_id: data.removal_id,
        sales_person: data.user.sales_person,
        installation_loc: data.user.installation_loc,
        registeration_no: data.user.registeration_no,
        technician_name: data.device.technician_name,
        mobileno_1: data.user.mobileno_1,
        engine_no: data.user.engine_no,
        chasis_no: data.user.chasis_no,
        date_of_installation: data.user.date_of_installation,
        client_id:data.id,
        device_id:data.device.device_id
      });
      console.log(data)
    }
    catch (err) {
      console.log(err)
    }

  };

  const SubmitRemoval = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: "include",
      body: JSON.stringify({
        registeration_no:removal.registeration_no,
        client_id:removal.client_id,
        customer_name:removal.customer_name,
        contact_no:removal.contact_no,
        device_id:removal.device_id,
        remarks:removal.remarks,
      })

    };

    let data;
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/createremoval",
        options
      );
      console.log(response)
      data = await response.json();
      console.log(data)
    }
    catch (err) {
      console.log(err)
    }

  }
  return (
    <div className='p-3'>
      <div className='flex justify-content-center mb-8'>
        <input className='w-96 mx-4  p-2' placeholder='Enter Registration , Engine or  Chachis Number ' onChange={getSearchItem} />
        <button className='theme_btn_md mx-4 rounded' onClick={sendData}>Search</button>
      </div>
      <div className='flex grid lg:grid-cols-2 gap-x-2 md:grid-co ls-1'>

        <div className=' flex flex-col justify-center space-y-3'>
          <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Form Type :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} onChange={getUserdata} name="form_type" /> </div>
          <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Removal Id :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} onChange={getUserdata} name="removal_id" /> </div>
          <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Contact Number :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} onChange={getUserdata} name="mobileno_1" /> </div>
          <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Registration Number:</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} onChange={getUserdata} name="registeration_no" /> </div>
          <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Sales Person :</p><input className=' ml-3 p-1 custum_input  cursor-not-allowed' style={{ width: "55%" }} onChange={getUserdata} name="sales_person" /> </div>
          <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Technichain :</p><input className=' ml-3 p-1 custum_input cursor-not-allowed' style={{ width: "55%" }} onChange={getUserdata} name="technician_name" /> </div>
        </div >
        <div className='space-y-3'>
          <div className=' flex flex-col justify-center space-y-3'>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Engine Number :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} onChange={getUserdata} name="engine_no" /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Chassis Number :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} onChange={getUserdata} name="chasis_no" /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Install Location :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} onChange={getUserdata} name="installation_loc" /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Date :</p><input type="date" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} onChange={getUserdata} name="date_of_installation" /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Remarks :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} onChange={getUserdata} name="remarks" /> </div>
          </div>
        </div>
      </div>
      <button className='theme_btn_md rounded-0 float-end my-3' onClick={SubmitRemoval}>Submit</button>
    </div>
  )
}
