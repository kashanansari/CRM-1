import React, { useState } from 'react'
import SuperAdminSidebar from '../../Components/SuperAdminSidebar';
import { useEffect } from 'react';

export default function AddEmployessSuperAdmin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [roles, setRoles] = useState([]);
  const [id, setId] = useState();

  const [newEmployee, setnewEmployee] = useState({
    emp_name: "",
    em_loginid: "",
    designation: "",
    contact: "",
    cnic: "",
    role: "",
    image: ""
  });

  let name, value
  const getUserdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setnewEmployee({ ...newEmployee, [name]: value });
  }


  console.log(newEmployee);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getRoles = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/roles");
    const response = await res.json();
    console.log(response.data)
    setRoles(response.data)
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setnewEmployee({ ...newEmployee, image: file });
  };
  

  const GetNewId = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/add_employees");
    const response = await res.json();
    setId(response.Emp_id)
    console.log(id)
  }

  // const sendData = async (e) => {
  //   e.preventDefault();

  //   if (emp_name && em_loginid && designation && contact && cnic && role && image) {
  //     console.log("Options:", options);
  //     const response = await fetch(
  //       "",
  //       options
  //     );
  //     console.log("Response:", response);
  //     if (response.ok) {
  //       alert("your response has been recorded");
  //     }
  //   } else {
  //     alert("Please Fill All Feilds");
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { emp_name, em_loginid, designation, contact, cnic, role, image } = newEmployee;
    const formDataToSend = new FormData();
    formDataToSend.append('emp_name', emp_name);
    formDataToSend.append('em_loginid', em_loginid);
    formDataToSend.append('designation', designation);
    formDataToSend.append('contact', contact);
    formDataToSend.append('cnic', cnic);
    formDataToSend.append('role', role);
    formDataToSend.append('image', image);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/create_emp', {
        method: 'POST',
        body: formDataToSend,
      });
      if (response.ok) {
        // Handle success
        console.log('User added successfully!');
      } else {
        // Handle error
        console.error('Failed to add user:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding user:', error.message);
    }
  };

  useEffect(() => {
    getRoles();
    GetNewId()
  }, []);

  return (
    <div>
      <div className='flex h-[100vh] bg-black'>
        {isSidebarOpen && (
          <div className="sidebar"><SuperAdminSidebar /></div>
        )}
        <div className='bg-gray-300 rounded-xl m-2 p-2 w-100 overflow-y-scroll'>
          <button onClick={toggleSidebar}><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz89LS0uWlpaPj4/4+PhfX1/29vawsLAdHR3b29v8/PzExMQzMzOEhIRzc3MPDw+hoaGysrLq6uo8PDwXFxfh4eFkZGRXV1fGxsZGRkaHh4fX19d6enqnp6e7u7sLhoRgAAAChUlEQVR4nO3di1LCQAyF4eWOCIgIqPWC7/+UWhm8jZNs2Z3JJP2/J8gZK+1u02xKAAAAAAAAAAAAAAAAABDfcjWZjfyYTVbLTvl2rwN/Nrv8gBPrYi80ycw33VtXerH9NCvgwbrOAoeciGvrKous9YA31jUWutEC3ltXWOxeSfhgXWCxBzng3Lq+CuZiwivr8iq4EhNurMurYCMm9H2rOJFvGNbVVdHzhJ6f2M4WYsJH6/IqeBQTel03/SSvoYbW5VUwFBOmW+v6it3KAdPRusBiRyVhWlhXWEj+JW29WJdY6EVN6PzhW71GW1vrKgtscwKm1FjXebEmL+DHOtjjhvDHskle+/7JOPa2abofd9jyPpleD/24ztoKBgAAAAAAAAAAPs2b49iPY9PlvVPrbWT9Lqmz0VuHfEOf7QoLpZPm27N1qRdT29hPZtZ1FpjlBPTdJiw3CH+6s66x0J0W0H+zvnbb8P7JzGDwLAdcWtdXgfyp5cq6vApWwS9S7ab4ZF1eBU9iQv8twlqTsHV1VfT8bxj//zD+b2n8+2GEZxoxoOfV75nyXBpgbaH20vr+GCFjfdiDNX4P9mk8/9povzJfwu+Xpvh73q3o7y0AAAAAAAAAAIAjwedE7cbeZiavO836mvt8050/r83vzD25WehL+LmJvme0Zsy+jD+/1GeTwjd1Bq3va7SlXaf+m4SVWdDx53nHn8kef65+hLMRDmJC6+qq6HlCb2um/8jnzPhcNv0mtwl77/JuyZ3e/lv11Q+Bw5+71oOz89x/25UxOML3DSPjDMsenEMa/yzZ5HcNlXsecHJ6pvNrtwMulo2zc7mbbudyAwAAAAAAAAAAAAAAAIBP7y86VZGfUH/eAAAAAElFTkSuQmCC' className='h-8 w-8' /></button>
          <div class="mask d-flex align-items-center h-100 ">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div class="bg-white shadow rounded-2xl">
                    <div class="card-body p-5">
                      <h2 class="text-uppercase font-bold text-2xl text-center mb-5">Register A New Employee </h2>
                      <form onSubmit={handleSubmit}>
                        <label class="form-label" for="form3Example1cg">Employee Id</label>                                                    <div class="form-outline mb-4">
                          <input required name="emp_name" onChange={getUserdata} type="text" id="form3Example1cg" value={id} class="form-control form-control cursor-not-allowed" readOnly />
                        </div>

                        <label class="form-label" for="form3Example3cg">Employee Name</label>                                                    <div class="form-outline mb-4">
                          <input required name="emp_name" onChange={getUserdata} type="text" id="form3Example3cg" class="form-control form-control" />
                        </div>

                        <label class="form-label" for="form3Example4cg">Password</label>                                                    <div class="form-outline mb-4">
                          <input required name="password" onChange={getUserdata} type="password" id="form3Example4cg" class="form-control form-control" />
                        </div>

                        <label class="form-label" for="form3Example4cdg">Employee Login ID</label>                                                    <div class="form-outline mb-4">
                          <input required name="em_loginid" onChange={getUserdata} type="text" id="form3Example4cdg" class="form-control form-control" />
                        </div>
                        <label class="form-label" for="form3Example4cdg">Designation</label>                                                    <div class="form-outline mb-4">
                          <input required name="designation" onChange={getUserdata} type="text" id="form3Example4cdg" class="form-control form-control" />
                        </div>
                        <label class="form-label" for="form3Example4cdg">Contact </label>                                                    <div class="form-outline mb-4">
                          <input required name="contact" onChange={getUserdata} type="number" id="form3Example4cdg" class="form-control form-control" />
                        </div>
                        <label class="form-label" for="form3Example1cg">CNIC </label>                                                    <div class="form-outline mb-4">
                          <input required name="cnic" onChange={getUserdata} type="text" id="form3Example1cg" class=" form-control form-control" />
                        </div>
                        <label className="form-label" htmlFor="form3Example1cg">Roles</label>
                        <select name="role" onChange={getUserdata} id="form3Example1cg" className="form-control p-2">
                          {roles.map((roleGroup, index) => {
                            const roles = roleGroup.split(',').map(role => role.trim());

                            return roles.map((role, roleIndex) => (
                              <option key={`${index}-${roleIndex}`} value={role}>{role}</option>
                            ));
                          })}
                        </select>
                        <label class="form-label" for="form3Example1cg">Image </label>                                                    <div class="form-outline mb-4">
                          <input required name="image" onChange={handleFileChange} type="file" className='border w-100 p-2 rounded' />
                        </div>
                        <div class="d-flex justify-content-center">
                          <button type="button"
                            class=" w-100 btn-lg theme_btn_md p-3 " type="submit">Register</button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
