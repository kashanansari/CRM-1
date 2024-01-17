import React, { useState } from 'react'
import SuperAdminSidebar from '../../Components/SuperAdminSidebar';

export default function EditEmployeSuperAdmin() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
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
                                            <h2 class="text-uppercase font-bold text-2xl text-center mb-5">Update an employee</h2>
                                            <form>
                                                <label class="form-label" for="form3Example1cg">Search By Login ID </label>
                                                <div class="form-outline mb-4 flex">
                                                    <input type="text" id="form3Example1cg" class=" form-control form-control-sm  w-50" placeholder='Enter Login Id to Search' />
                                                    <button className='theme_btn_md ml-4'>Search</button>
                                                </div>
                                                <label class="form-label" for="form3Example1cg">Employee Id</label>                                                    <div class="form-outline mb-4">
                                                    <input type="text" id="form3Example1cg" class=" form-control form-control-sm " />
                                                </div>

                                                <label class="form-label" for="form3Example3cg">Employee Name</label>                                                    <div class="form-outline mb-4">
                                                    <input type="text" id="form3Example3cg" class="form-control form-control-sm " />
                                                </div>

                                                <label class="form-label" for="form3Example4cg">Password</label>                                                    <div class="form-outline mb-4">
                                                    <input type="password" id="form3Example4cg" class="form-control form-control-sm " />
                                                </div>

                                                <label class="form-label" for="form3Example4cdg">Employee Login ID</label>                                                    <div class="form-outline mb-4">
                                                    <input type="text" id="form3Example4cdg" class="form-control form-control-sm " />
                                                </div>
                                                <label class="form-label" for="form3Example4cdg">Designation</label>                                                    <div class="form-outline mb-4">
                                                    <input type="password" id="form3Example4cdg" class="form-control form-control-sm " />
                                                </div>
                                                <label class="form-label" for="form3Example4cdg">Contact </label>                                                    <div class="form-outline mb-4">
                                                    <input type="password" id="form3Example4cdg" class="form-control form-control-sm " />
                                                </div>
                                                <label class="form-label" for="form3Example1cg">CNIC </label>                                                    <div class="form-outline mb-4">
                                                    <input type="text" id="form3Example1cg" class=" form-control form-control-sm " />
                                                </div>
                                                <label class="form-label" for="form3Example1cg">Employee Id</label>                                                    <div class="form-outline mb-4">
                                                    <input type="text" id="form3Example1cg" class=" form-control form-control-sm " />
                                                </div>
                                                <label class="form-label" for="form3Example1cg">Image </label>                                                    <div class="form-outline mb-4">
                                                    <input type="text" id="form3Example1cg" class=" form-control form-control-sm " />
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                    <button type="button"
                                                        class=" w-100 btn-lg theme_btn_md p-3 ">Update</button>
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
