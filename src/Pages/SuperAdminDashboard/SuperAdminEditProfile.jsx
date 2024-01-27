import React, { useState } from 'react'
// import UpdateProfile from '../../Components/UpdateProfile'
import SuperAdminSidebar from '../../Components/SuperAdminSidebar'

export default function SuperAdminEditProfile() {
  const [newEmployee, setnewEmployee] = useState({
    emp_name: "",
    em_loginid: "",
    designation: "",
    contact: "",
    cnic: "",
    role: "",
    image: ""
  });



const GetUser = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/editprofile");
    const response = await res.json();
    setnewEmployee(response.data)
    console.log(response.data)
  }

  return (
    <div>
    <div className='flex h-[100vh] bg-black'>
        <SuperAdminSidebar />
        <div className='bg-white rounded-xl m-2 p-2 w-100 overflow-y-scroll'>
        <div class="container-xl px-4 mt-4">
                <div class="row">
                    <div class="col-xl-4">
                        <div class="card mb-4 mb-xl-0 " style={{height:"95%"}}>
                            <div class="card-header">Profile Picture</div>
                            <div class="flex flex-col jutify-center card-body text-center">
                                <img class=" rounded-circle mb-4" style={{width:"150px"}} src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                <input type="file" class="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8">
                        <div class="card mb-4">
                            <div class="card-header">Account Details</div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputUsername">Login Id </label>
                                        <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputUsername">Name </label>
                                        <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputUsername">Phone </label>
                                        <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputUsername">Password </label>
                                        <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username" />
                                    </div>
                                    <button class="theme_btn_md" type="button">Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="card mb-4">
                            <div class="card-header">Create New Password</div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputUsername">New Password </label>
                                        <input class="form-control" id="inputUsername" type="text" placeholder="Password" value="username" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputUsername">Confrim New Password </label>
                                        <input class="form-control" id="inputUsername" type="text" placeholder="Confriom Password" value="username" />
                                    </div>
                                    <button class="theme_btn_md" type="button">Save changes</button>
                                </form>
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
