import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../../Components/ErrorAlert';
import SuccesAlert from '../../Components/SuccesAlert';

export default function RemovalCS() {
  const [ErrorPopup, setErrorPopup] = useState(false);
  const [msg, setMsg] = useState("");
  const [SuccesPopup, setSuccesPopup] = useState(false)
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  const [removal, setRemoval] = useState({
    form_type: "",
    removal_id: "",
    customer_name: "",
    sales_person: "",
    installation_loc: "",
    registeration_no: "",
    make: '',
    model: '',
    color: '',
    technician_name: "",
    mobileno_1: "",
    engine_no: "",
    chasis_no: "",
    installation_loc: "",
    date_of_installation: "",
    remarks: "",
    device_id: "",
    client_id: ""
  });


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

  const getRemoavalData = async (e) => {
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
      if (response.status === 200) {
        console.log(data)
        setMsg("")
        setErrorPopup(false)
        setRemoval({
          form_type: "removal",
          removal_id: data.removal_id,
          customer_name: data.user.customer_name,
          sales_person: data.user.sales_person,
          installation_loc: data.user.installation_loc,
          registeration_no: data.user.registeration_no,
          technician_name: data.device.technician_name,
          mobileno_1: data.user.mobileno_1,
          engine_no: data.user.engine_no,
          chasis_no: data.user.chasis_no,
          date_of_installation: data.user.date_of_installation,
          client_id: data.user.id,
          device_id: data.device.device_id,
          make: data.user.make,
          model: data.user.model,
          color: data.user.color,

        });
        console.log(data)
      }
      else if (response.status === 400) {
        setRemoval({
          form_type: "",
          removal_id: "",
          customer_name: "",
          sales_person: "",
          installation_loc: "",
          registeration_no: "",
          technician_name: "",
          mobileno_1: "",
          engine_no: "",
          chasis_no: "",
          date_of_installation: "",
          client_id: "",
          device_id: "",
          remarks: "",
          make: '',
          model: '',
          color: ''
        })
        console.log(data.message)
        setMsg(data.message)
        setErrorPopup(true)
      }
      else {
        console.log("PLease Try Again Later")
      }
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
        id: removal.removal_id,
        reg_no: removal.registeration_no,
        client_id: removal.client_id,
        customer_name: removal.customer_name,
        sales_per: removal.sales_person,
        make: removal.make,
        model: removal.model,
        color: removal.color,
        eng_no: removal.engine_no,
        chasis: removal.chasis_no,
        install_loc: removal.installation_loc,
        install_date: removal.date_of_installation,
        contact_no: removal.mobileno_1,
        device: removal.device_id,
        remarks: removal.remarks,

      })

    };
    const { registeration_no, client_id, customer_name, mobileno_1, remarks, device_id } = removal
    if (registeration_no && client_id && customer_name && mobileno_1 && remarks && device_id) {
      let data;
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/createremoval",
          options
        );
        console.log(response)
        data = await response.json();
        if (response.status === 200) {
          console.log(options.body)
          console.log(data)
          setMsg(data.message)
          setSuccesPopup(true)
          setRemoval({
            form_type: "",
            removal_id: "",
            customer_name: "",
            sales_person: "",
            installation_loc: "",
            registeration_no: "",
            make: '',
            model: '',
            color: '',
            technician_name: "",
            mobileno_1: "",
            engine_no: "",
            chasis_no: "",
            installation_loc: "",
            date_of_installation: "",
            remarks: "",
            device_id: "",
            client_id: ""
          })

        } else if (response.status === 420) {
          console.log(options.body)
          setMsg(data.message)
          setErrorPopup(true)

        }
        else if (response.status === 402) {
          console.log(options.body)
          setMsg(data.message)
          setErrorPopup(true)
          console.log(data.error)
        }
        else {
          console.log(options.body)
          console.log("Internal Server Error")
        }
      }
      catch (err) {
        console.log(err)
      }
    } else {
      console.log(options.body)
      setMsg("Opps its look like There is Something Missing ")
      setErrorPopup(true)
    }

  }
  return (
    <div className='p-3'>

      <div className='flex justify-content-center mb-8'>
        <input className='w-96 mx-4  p-2' placeholder='Enter Registration , Engine or  Chachis Number ' onChange={getSearchItem} />
        <button className='theme_btn_md mx-4 rounded' onClick={getRemoavalData}>Search</button>
      </div>
      {ErrorPopup && (<ErrorAlert errorMessage={msg} />)}
      {SuccesPopup && (<SuccesAlert succesMessage={msg} />)}
      <div className='flex grid lg:grid-cols-2 gap-x-2 md:grid-co ls-1'>

        <div className=' flex flex-col justify-center space-y-3'>
          <div className='flex justify-center'>
            <p className='text-start text-sm' style={{ width: "40%" }}> Form Type :</p>
            <input className='ml-3 p-1 custom_input cursor-not-allowed' style={{ width: "55%" }} value={removal.form_type} readOnly />
          </div>
          <div className='flex justify-center'>
            <p className='text-start text-sm' style={{ width: "40%" }}> Removal Id :</p>
            <input className='ml-3 p-1 custom_input cursor-not-allowed' style={{ width: "55%" }} value={removal.removal_id} readOnly />
          </div>
          <div className='flex justify-center'>
            <p className='text-start text-sm' style={{ width: "40%" }}> Contact Number :</p>
            <input className='ml-3 p-1 custom_input' style={{ width: "55%" }} onChange={getUserdata} value={removal.mobileno_1} name="mobileno_1" />
          </div>
          <div className='flex justify-center'>
            <p className='text-start text-sm' style={{ width: "40%" }}> Registration Number:</p>
            <input className='ml-3 p-1 custom_input cursor-not-allowed' style={{ width: "55%" }} onChange={getUserdata} value={removal.registeration_no} name="registeration_no" />
          </div>
          <div className='flex justify-center'>
            <p className='text-start text-sm' style={{ width: "40%" }}> Sales Person :</p>
            <input className='ml-3 p-1 custom_input cursor-not-allowed' style={{ width: "55%" }} onChange={getUserdata} value={removal.sales_person} name="sales_person" />
          </div>
          <div className='flex justify-center'>
            <p className='text-start text-sm' style={{ width: "40%" }}> Technician :</p>
            <input className='ml-3 p-1 custom_input cursor-not-allowed' style={{ width: "55%" }} onChange={getUserdata} value={removal.technician_name} name="technician_name" />
          </div>

        </div >
        <div className='space-y-3'>
          <div className=' flex flex-col justify-center space-y-3'>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Engine Number :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} value={removal.engine_no} onChange={getUserdata} name="engine_no" /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Chassis Number :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} value={removal.chasis_no} onChange={getUserdata} name="chasis_no" /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Install Location :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} value={removal.installation_loc} onChange={getUserdata} name="installation_loc" /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Date :</p><input type="date" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} value={removal.date_of_installation} onChange={getUserdata} name="date_of_installation" /> </div>
            <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Remarks :</p><input className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} value={removal.remarks} onChange={getUserdata} name="remarks" /> </div>
          </div>
        </div>
      </div>
      <button className='theme_btn_md rounded-0 float-end my-3' onClick={SubmitRemoval}>Submit</button>
    </div>
  )
}
