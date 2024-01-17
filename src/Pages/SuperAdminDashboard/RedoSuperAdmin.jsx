import React, { useState } from 'react'
import SuperAdminSidebar from '../../Components/SuperAdminSidebar';


export default function RedoSuperAdmin() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <div className='flex h-100'>
                <div className='bg-gray-200 rounded-xl m-2 p-2 mt-0 pt-0  w-100'>
                    <div className='m-2 p-2 bg-white mt-0'>
                        <div className='bg-white p-2'>
                            <div class="flex flex-col">
                                <div class="overflow-x-auto ">
                                    <div class="py-2 inline-block min-w-full ">
                                        <div class="overflow-x-auto ">
                                            <table class="min-w-full">
                                                <thead class="border">
                                                    <tr>
                                                        <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                            Customer Name
                                                        </th>
                                                        <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                            Registration #
                                                        </th>
                                                        <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                            Old Device
                                                        </th>
                                                        <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                            New Device
                                                        </th>
                                                        <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                            Technicain
                                                        </th>
                                                        <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                            Charges
                                                        </th>
                                                        <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                            Date / Time
                                                        </th>
                                                        <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                            Remarks
                                                        </th>
                                                        <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                            Representative
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="bg-white border-2 border-gray-200">
                                                        <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200"> JU-7025</td>
                                                        <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                            27684
                                                        </td>
                                                        <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                            O63705
                                                        </td>
                                                        <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                            Hino Pak /  Truck
                                                        </td>
                                                        <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">Blue</td>
                                                        <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                            1995
                                                        </td>
                                                        <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                            manual
                                                        </td>
                                                        <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                            no
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white m-2 mt-4'>
                        <h1 className='text-xl font-semibold bg-black text-white p-2 '>Vehicle Information</h1>
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="overflow-x-auto m-2 mb-4">
                                        <table class="min-w-full">
                                            <thead class="bg-gray-300 border">
                                                <tr>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Registration #
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Chassis #
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Engine #
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Make / Model
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Color
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Year
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Transmission
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Mobilizer
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-white border">
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200"> JU-7025</td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        27684
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        O63705
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        Hino Pak /  Truck
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">Blue</td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        1995
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        manual
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        no
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Redo Logs  */}
                    <div className='m-2 bg-white mt-4'>
                        <h1 className='text-xl font-semibold bg-black text-white p-2 '> Redo Log</h1>
                        <div class="flex flex-col">
                            <div class="overflow-x-auto">
                                <div class="py-2 inline-block min-w-full my-3 mx-1">
                                    <div class="overflow-x-auto ">
                                        <table class="min-w-full">
                                            <thead class="bg-gray-300 border">
                                                <tr>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Alert
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Customer Name
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Registration #
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Contact Person
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Date / Time
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Remarks
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Contact
                                                    </th>
                                                    <th scope="col" class="text-xs font-medium text-gray-900  p-2 text-start border-2 border-gray-200">
                                                        Representative
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-white border">
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200"> JU-7025</td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        27684
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        O63705
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        Hino Pak /  Truck
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">Blue</td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        1995
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        manual
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        no
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border">
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200"> JU-7025</td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        27684
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        O63705
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        Hino Pak /  Truck
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">Blue</td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        1995
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        manual
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        no
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border">
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200"> JU-7025</td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        27684
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        O63705
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        Hino Pak /  Truck
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">Blue</td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        1995
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        manual
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        no
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border">
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200"> JU-7025</td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        27684
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        O63705
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        Hino Pak /  Truck
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">Blue</td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        1995
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        manual
                                                    </td>
                                                    <td class="text-xs text-gray-900 font-light p-2  whitespace-nowrap border border-gray-200">
                                                        no
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* INformation  */}
          <div className='m-2 bg-white mt-4'>
            <h1 className='text-xl font-semibold bg-black text-white p-2'>Cleint Information</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-2'>
              <div>
                <h1 className='bg-gray-200 p-2 text-md font-bold my-2 mr-4'> Primary User Information</h1>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Customer Name:</p>
                  <p className='text-sm  w-60 '>Aryanmmmmm bbbbbbbbbbbbbbbbb bbbbbbidhf hhwj </p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Father Name:</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Address </p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
              </div>
              <div>
                <h1 className='bg-gray-200 p-2 text-md font-bold my-2 mr-4'> Contact Information</h1>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Contact 1</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Contact 2</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Contact 3</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>CNIC</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
              </div>
              <div>
                <h1 className='bg-gray-200 text-md font-bold my-2 mr-2 p-2'>Security  Information</h1>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Customer Email:</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Password </p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Emergency Password: </p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Emergency Person :</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Security Question:</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Security Answer:</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
              </div>
            </div>
          </div>

          <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-x-3 m-2 mt-2'>
            {/* device Information  */}
            <div className='bg-white mt-3'>
              <h1 className='text-xl font-semibold bg-black text-white p-2 '>Vehicle Information</h1>
              <div className='p-2'>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Device ID:</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>IMEI #:</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>GSM #:</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Sales Person:</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Technician:</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Date Of Installation:</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
                <div className='flex'>
                  <p className='text-sm font-bold w-40'>Tracker Status:</p>
                  <p className='text-sm  w-60'>Aryan</p>
                </div>
              </div>
            </div>
            {/* Value Addition Services */}
            <div className='bg-white mt-3'>
              <h1 className='text-xl font-semibold bg-black text-white p-2 '>Value Addition Services</h1>
              <div className='p-2 flex'>
                <div className='w-60'>
                  <div className='flex'>
                    <p className='text-sm font-bold w-60'>Location On Call:</p>
                    <p className='text-sm ml w-40'>NO</p>
                  </div>
                  <div className='flex'>
                    <p className='text-sm font-bold w-60'>Igination On :</p>
                    <p className='text-sm w-40'>Yes</p>
                  </div>
                  <div className='flex'>
                    <p className='text-sm font-bold w-60'>Geo Fence Alerts :</p>
                    <p className='text-sm w-40'>YES</p>
                  </div>
                  <div className='flex'>
                    <p className='text-sm font-bold w-60'>Mobile App :</p>
                    <p className='text-sm w-40'>YES</p>
                  </div>
                  <div className='flex'>
                    <p className='text-sm font-bold w-60'>Webtrack:</p>
                    <p className='text-sm  w-40'>Aryan</p>
                  </div>
                  <div className='flex'>
                    <p className='text-sm font-bold w-60'>Over Speed:</p>
                    <p className='text-sm  w-40'>Aryan</p>
                  </div>
                </div>
                <div className='w-40'>
                  <div className='flex'>
                    <p className='text-sm font-bold w-40'>Time:</p>
                    <p className='text-sm ml w-60'>NO</p>
                  </div>
                  <div className='flex'>
                    <p className='text-sm font-bold w-40'>Time:</p>
                    <p className='text-sm w-60'>Yes</p>
                  </div>
                  <div className='flex'>
                    <p className='text-sm font-bold w-40'>Time:</p>
                    <p className='text-sm w-60'>YES</p>
                  </div>
                  <div className='flex'>
                    <p className='text-sm font-bold w-40'>Time:</p>
                    <p className='text-sm w-60'>YES</p>
                  </div>
                  <div className='flex'>
                    <p className='text-sm font-bold w-40'>Time:</p>
                    <p className='text-sm  w-60'>Aryan</p>
                  </div>
                  <div className='flex'>
                    <p className='text-sm font-bold w-40'>Time:</p>
                    <p className='text-sm  w-60'>Aryan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Instruction  */}
            <div className='bg-white mt-3'>
              <h1 className='text-xl font-semibold bg-black text-white p-2 '>Specail Instruction</h1>
              <div className='p-4'>
                <p className='text-sm font-bold '>Instruction :</p>
             </div>
            </div>
          </div>
                </div>
            </div>
        </div>
    )
}
