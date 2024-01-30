import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CS_Sidebar from '../../Components/CS_Sidebar';

export default function AddUserCS() {
  const [newCustomer, setnewCustomer] = useState({
    customer_name: "",
    fatherName: "",
    address: "",
    telephone_residence: "",
    mobileno_1: "",
    ntn: "",
    cnic: "",
    seconadryuser_name: "",
    relationship: "",
    secondaryuser_con1: "",
    registeration_no: "",
    engine_no: "",
    chasis_no: "",
    CC: "",
    make: "",
    model: "",
    year: "",
    color: "",
    installation_loc: "",
    date: "",
    campaign_point: "",
    dealership: "",
    dealer_name: "",
    sales_person: "",
    conatct_person: "",
    insurance_partner: "",
    tracker_charges: "",
    date_of_installation: "",
    int_comission: "",
    ext_comission: "",
    discount: "",
    remarks: "",
    renewal_charges: "",
    primaryuser_name: "",
    primaryuser_con1: "",
    primaryuser_cnic: "",
    engine_type: "",
    transmission: "",
    vas: "",
    vas_options: [],
    demo_duration:"",
    segment: ""
  });
  const [id, setId] = useState();

  let name, value
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setnewCustomer({ ...newCustomer, [name]: value });
    console.log(newCustomer);
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [option, setOption] = useState('');

  const handleVasOptionChange = (e) => {
    setShowAdditionalFields(e.target.value === 'Yes');
    setnewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
    console.log(newCustomer);

  };

  const handleOptionInput = (e) => {
    setOption(e.target.value);
  };

  const GetNewId = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/user");
    const response = await res.json();
    setId(response.client_id)
    console.log(response.client_id)
  }

  const handleCheckboxChange = (e) => {
    let value , checked 
     value= e.target.value
  let updatedOptions = [...newCustomer.vas_options]; // Copy the existing array
  if (checked) {
    updatedOptions.push(value); // Add to array if checked
  } else {
    updatedOptions = updatedOptions.filter((option) => option !== value); // Remove from array if unchecked
  }
  setnewCustomer({
    ...newCustomer,
    vas_options: updatedOptions, // Update vas_options in the state
  });
  };


  const sendData = async (e) => {
    e.preventDefault();
    const { id, customer_name, fatherName, address, telephone_residence, mobileno_1, remarks ,ntn, cnic, seconadryuser_name, relationship, secondaryuser_con1, registeration_no, engine_no, chasis_no, CC, make, model, year, color, installation_loc, date , campaign_point, dealership, dealer_name, sales_person, conatct_person, insurance_partner, tracker_charges, date_of_installation, int_comission, ext_comission, discount, renewal_charges, primaryuser_name, primaryuser_con1, primaryuser_cnic, engine_type, transmission, vas, vas_options, segment ,demo_duration } = newCustomer;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: "include",
      body: JSON.stringify({
        id,
        customer_name,
        fatherName,
        address,
        telephone_residence,
        mobileno_1,
        ntn,
        cnic,
        seconadryuser_name,
        relationship,
        secondaryuser_con1,
        registeration_no,
        engine_no,
        chasis_no,
        CC,
        make,
        model,
        year,
        color,
        installation_loc,
        date,
        campaign_point,
        dealership,
        dealer_name,
        sales_person,
        conatct_person,
        insurance_partner,
        tracker_charges,
        date_of_installation,
        int_comission,
        ext_comission,
        discount,
        remarks,
        renewal_charges,
        primaryuser_name,
        primaryuser_con1,
        primaryuser_cnic,
        engine_type,
        transmission,
        vas,
        vas_options,
        demo_duration,
        segment
      }),
    };

    let data;
    if (customer_name && fatherName && address && telephone_residence && mobileno_1 && ntn && cnic && seconadryuser_name && relationship && secondaryuser_con1 && registeration_no && engine_no && chasis_no && CC && make && model && year && color && installation_loc && date && remarks && campaign_point && dealership && dealer_name && sales_person && conatct_person && insurance_partner && tracker_charges && date_of_installation && int_comission && ext_comission && discount && renewal_charges && primaryuser_name && primaryuser_con1 && primaryuser_cnic && engine_type && transmission && vas && segment) {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/storedata", options);
        data = await response.json();
        console.log(data)
        if (response.status === 200) {
          console.log(data.message);
        }
        else {
          window.alert("error ");
          console.log(data.errors)
        }
      }
      catch (err) {
        console.log(err)
      }
    } else {
      window.alert("Plesae Fill All the feilds")
    }
  }
  useEffect(() => {
    GetNewId()
  }, []);


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
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}>Client ID :</p><input id="id" className=' ml-3 p-1 custum_input ' value={id} style={{ width: "55%" }} readOnly /></div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Customer Number :</p><input onChange={getUserData} name="customer_name" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Father Name:</p><input onChange={getUserData} name="fatherName" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> address :</p><input onChange={getUserData} name="address" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> telephone_residence Residence :</p><input onChange={getUserData} name="telephone_residence" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Mobile Number :</p><input onChange={getUserData} name="mobileno_1" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> NTN :</p><input onChange={getUserData} name="ntn" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> CNIC :</p><input onChange={getUserData} name="cnic" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Primary  User :</p><input onChange={getUserData} name="primaryuser_name" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Primary User CNIC :</p><input onChange={getUserData} name="primaryuser_cnic" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Primary User Contact:</p><input onChange={getUserData} name="primaryuser_con1" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Secondary User :</p><input onChange={getUserData} name="seconadryuser_name" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Relationship with Primary  User :</p><input onChange={getUserData} name="relationship" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Secondary User Contact:</p><input onChange={getUserData} name="secondaryuser_con1" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
            </div >
            <div className='space-y-3'>
              <div className=' flex flex-col justify-center space-y-3'>
                <h1 className='text-lg font-bold bg-black text-white p-2'>Vehicle Details</h1>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Registration Number :</p><input onChange={getUserData} name="registeration_no" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Engine Number :</p><input onChange={getUserData} name="engine_no" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Chassis Number :</p><input onChange={getUserData} name="chasis_no" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> CC :</p><input onChange={getUserData} name="CC" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Make :</p><input onChange={getUserData} name="make" type="text" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Model :</p><input onChange={getUserData} name="model" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Year :</p><input onChange={getUserData} name="year" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Color  :</p><input onChange={getUserData} name="color" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Engine Type  :</p><input onChange={getUserData} name="engine_type" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Transmission :</p><input onChange={getUserData} name="transmission" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-between'><p className='text-start text-sm' style={{ width: "40%" }}> Date :</p><input onChange={getUserData} name="date" type="date" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              </div>
            </div>
            {/* Product Details  */}
            <div className=' flex flex-col justify-center space-y-3'>
              <h1 className='text-lg font-bold bg-black text-white p-2'>Product Details</h1>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}>Insurance Partner :</p><input onChange={getUserData} name="insurance_partner" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}>VAS :</p>
                <div className=' ml-3 p-1  flex justify-start space-x-3' style={{ width: "55%" }} >
                  <div className='flex'><input  type="radio" className='mr-2' name='vasOption' value='Yes'
                    onChange={handleVasOptionChange} />Yes
                  </div>
                  <div className='flex justify-between'><input  type="radio" name='vasOption'
                    value='No'
                    onChange={handleVasOptionChange} className='mr-2' />No </div>
                </div>
              </div>
              {showAdditionalFields && (
                <div className='space-y-2'>
                  <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Location on Call :</p><input onChange={handleCheckboxChange} value="Location on Call" type='checkbox' className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                  <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Ignition On :</p><input onChange={handleCheckboxChange} value="Ignition On " type='checkbox' className=' ml-3 p-1 custum_input' style={{ width: "55%" }} /> </div>
                  <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Ignition Off :</p><input onChange={handleCheckboxChange} value="Ignition Off" type='checkbox' className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                  <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Webtrack :</p><input onChange={handleCheckboxChange} value="Webtrack" type='checkbox' className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                  <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Geofence Alerts :</p><input onChange={handleCheckboxChange} value="Geofence Alerts" type='checkbox' className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                  <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Mobile App :</p><input onChange={handleCheckboxChange} value="Mobile App" type='checkbox' className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                  <div className='flex justify-center mb-3'><p className='text-start text-sm' style={{ width: "40%" }}> Over Speed :</p><input onChange={handleCheckboxChange} value="Over Speed" type='checkbox' className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
                </div>)}
            </div >
            {/* Other Details  */}
            <div className=' flex flex-col justify-center space-y-3'>
              <h1 className='text-lg font-bold bg-black text-white p-2'>Other Details</h1>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> dealership :</p><input onChange={getUserData} name="dealership" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Dealer Name :</p><input onChange={getUserData} name="dealer_name" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Sales Person :</p><input onChange={getUserData} name="sales_person" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Installation Location :</p><input onChange={getUserData} name="installation_loc" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Contact Person :</p><input onChange={getUserData} name="conatct_person" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Remarks :</p><input onChange={getUserData} name="remarks" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
            </div >
            {/* Payment Details  */}
            <div className=' flex flex-col justify-center space-y-3'>
              <h1 className='text-lg font-bold bg-black text-white p-2'>Payment Details</h1>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}>Campaign Point Allocation :</p><input onChange={getUserData} name="campaign_point" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}>VAS :</p>
                <div className=' ml-3 p-1 text-sm flex justify-start grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 space-x-1' style={{ width: "55%" }} >
                  <div className='flex'><input  type="radio" className='mr-2' onChange={handleOptionInput} name="vasOption" value="cash" />Cash </div>
                  <div className='flex'><input  type="radio" className='mr-2' onChange={handleOptionInput} name="vasOption" value="rental" />Cash Rental </div>
                  <div className='flex'><input  type="radio" className='mr-2' onChange={handleOptionInput} name="vasOption" value="demo" />Demo </div>
                </div>
              </div>
              {option === 'demo' && (
                <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Demo Duration :</p><input onChange={getUserData} name="demo_duration" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              )}
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Tracker Charges :</p><input onChange={getUserData} name="tracker_charges" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Installation Date :</p><input onChange={getUserData} name="installation_loc" type='date' className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Internal Commission :</p><input onChange={getUserData} name="int_comission" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> External Commission :</p><input onChange={getUserData} name="ext_comission" className=' ml-3 p-1 custum_input ' style={{ width: "55%" }} /> </div>
              <div className='flex justify-center'><p className='text-start text-sm' style={{ width: "40%" }}> Discount :</p><input onChange={getUserData} name="discount" className=' ml-3 p-1 custum_input  ' style={{ width: "55%" }} /> </div>
            </div >
          </div>
          <button className='theme_btn_md rounded-0 float-end my-3' onClick={sendData}>Submit</button>
        </div>
      </div>
    </div>
  )
}
