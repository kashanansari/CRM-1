import React, { useState } from 'react'
import SuperVisorSidebar from '../../Components/SuperVisorSidebar';

export default function AddPayment() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            <div className='flex h-[100vh] bg-black'>
                {isSidebarOpen && (
                    <div className="sidebar"><SuperVisorSidebar /></div>
                )}
                <div className='bg-white rounded-xl m-2 p-2 w-100 overflow-y-scroll bg'>
                    <button onClick={toggleSidebar} className='bg-black'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz89LS0uWlpaPj4/4+PhfX1/29vawsLAdHR3b29v8/PzExMQzMzOEhIRzc3MPDw+hoaGysrLq6uo8PDwXFxfh4eFkZGRXV1fGxsZGRkaHh4fX19d6enqnp6e7u7sLhoRgAAAChUlEQVR4nO3di1LCQAyF4eWOCIgIqPWC7/+UWhm8jZNs2Z3JJP2/J8gZK+1u02xKAAAAAAAAAAAAAAAAABDfcjWZjfyYTVbLTvl2rwN/Nrv8gBPrYi80ycw33VtXerH9NCvgwbrOAoeciGvrKous9YA31jUWutEC3ltXWOxeSfhgXWCxBzng3Lq+CuZiwivr8iq4EhNurMurYCMm9H2rOJFvGNbVVdHzhJ6f2M4WYsJH6/IqeBQTel03/SSvoYbW5VUwFBOmW+v6it3KAdPRusBiRyVhWlhXWEj+JW29WJdY6EVN6PzhW71GW1vrKgtscwKm1FjXebEmL+DHOtjjhvDHskle+/7JOPa2abofd9jyPpleD/24ztoKBgAAAAAAAAAAPs2b49iPY9PlvVPrbWT9Lqmz0VuHfEOf7QoLpZPm27N1qRdT29hPZtZ1FpjlBPTdJiw3CH+6s66x0J0W0H+zvnbb8P7JzGDwLAdcWtdXgfyp5cq6vApWwS9S7ab4ZF1eBU9iQv8twlqTsHV1VfT8bxj//zD+b2n8+2GEZxoxoOfV75nyXBpgbaH20vr+GCFjfdiDNX4P9mk8/9povzJfwu+Xpvh73q3o7y0AAAAAAAAAAIAjwedE7cbeZiavO836mvt8050/r83vzD25WehL+LmJvme0Zsy+jD+/1GeTwjd1Bq3va7SlXaf+m4SVWdDx53nHn8kef65+hLMRDmJC6+qq6HlCb2um/8jnzPhcNv0mtwl77/JuyZ3e/lv11Q+Bw5+71oOz89x/25UxOML3DSPjDMsenEMa/yzZ5HcNlXsecHJ6pvNrtwMulo2zc7mbbudyAwAAAAAAAAAAAAAAAIBP7y86VZGfUH/eAAAAAElFTkSuQmCC' className='h-8 w-8 bg-black' /></button>
                    <div className='border-2 border-black rounded-2 shadow-lg '>
                    <h1 className='text-xl font-semibold bg-black text-white p-2 '>Vehicle Status</h1>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-x-3 mt-2 p-2'>
                        <div className='p-2 space-y-2'>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Segment :
                                </p>
                                <p className='text-md  w-60'>Cash
                                </p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Customer Name :
                                </p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Staus :</p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Contact :</p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Staus :</p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Tracker Charges:</p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Registration # :</p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Sales Person:</p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Date of Renewal :
                                </p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Month :
                                </p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                        </div>
                        <div className='p-2 space-y-2'>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'> City :</p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Date of Installation :
                                </p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Renewal Amount :
                                </p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>
                                    Engine # :</p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>
                                    BRV # :</p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Reference # :</p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                            <div className='flex border p-2 border-black'>
                                <p className='text-md font-bold w-40'>Chassis # :</p>
                                <p className='text-md  w-60'>Completed</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div >
                        <h1 className='text-xl font-bold mt-4 m-2   '>Add Payment</h1>
                        <div className='grid grid-cols-2 m-2'>
                            <div>
                                <div className='my-4    '>  
                                <label className='mr-3 w-40' >Status :</label><input className='w-60 p-2 border border-black rounded-2' />
                                </div>
                                <label className='mr-3 w-40' >Renewal Amount :</label><input className='w-60 p-2 border border-black rounded-2' />
                            </div>
                            <div>
                                <div className='my-4    '>  
                                <label className='mr-3 w-40' >Submitted Amount :</label><input className='w-60 p-2 border border-black rounded-2' />
                                </div>
                                <label className='mr-3 w-40' >Remarks :</label><input className='w-60 p-2 border border-black rounded-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
