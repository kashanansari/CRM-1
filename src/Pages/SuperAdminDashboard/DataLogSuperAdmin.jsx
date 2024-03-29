import React, { useState } from 'react'
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { useMemo } from 'react';
export default function DataLogSuperAdmin() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const data = [
    {
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      address: '261 Erdman Ford',
      city: 'East Daphne',
      state: 'Kentucky',
    },
    {
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      address: '769 Dominic Grove',
      city: 'Columbus',
      state: 'Ohio',
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      address: '566 Brakus Inlet',
      city: 'South Linda',
      state: 'West Virginia',
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      address: '722 Emie Stream',
      city: 'Lincoln',
      state: 'Nebraska',
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      address: '32188 Larkin Turnpike',
      city: 'Charleston',
      state: 'South Carolina',
    },
  ]

  const columns = useMemo(
    () => [
      {
        accessorKey: 'Contact No',
        header: 'Alert',
        size: 100,
      },
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'Customer Name',
        size: 100,
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Registration',
        size: 100,
      },
      {
        accessorKey: 'CNIC',
        header: 'Contact',
        size: 100,
      },
      {
        accessorKey: 'CNIC',
        header: 'Contact Person',
        size: 100,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Alert',
        size: 100,
      },
      {
        accessorKey: 'Role',
        header: 'Day/Time',
        size: 100,
      },
      {
        accessorKey: 'Role',
        header: 'Remarks',
        size: 100,
      },
      {
        accessorKey: 'CNIC',
        header: 'Representative',
        size: 100,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    muiTableHeadCellProps: {
      //simple styling with the `sx` prop, works just like a style prop in this example
      sx: {
        fontWeight: 'bold',
        fontSize: '12px',
        border: '1px solid #e0e0e0',
        color: "black"
      },
    },
    muiTableBodyProps: {
      sx: {
        fontSize: "8px"
      }
    },
    muiTableBodyCellProps: {
      sx: {
        fontSize: "11px",
        borderRight: '2px solid #e0e0e0', //add a border between columns
      },
    }
  });
  
  return (
    <div>
      <div className='flex h-100'>
        <div className='bg-gray-200 rounded-xl m-2 p-2 mt-0 pt-0  w-100 '>
          <div className='m-2 p-2 bg-white mt-0'>
            <h1 className='text-xl font-semibold bg-gray-200 p-2 m-2'>Enter Data Log</h1>
            <div className='flex grid lg:grid-cols-2 md:grid-cols-1'>
              <div className=' flex flex-col justify-center'>
              <div className='flex justify-center my-2'><p className='text-end md:text-start ' style={{ width: "40%" }}> Nature of Alert</p><select class={`input-field  ml-4 p-1  border ${inputValue.trim() !== '' ? 'bg-white' : 'bg-gray-200'}`} onChange={handleInputChange} style={{ width: "55%" }} aria-label=".form-select-lg example">
                                    <option value="1">Pre Info</option>
                                    <option value="2">National Highway</option>
                                    <option value="3">No Go Area</option>
                                    <option value="4">Battery Alert</option>
                                    <option value="5">Wrong Location</option>
                                    <option value="6">Gamer Alert</option>
                                </select>
                                </div>
                <div className='flex justify-center my-2'><p className='text-end md:text-start' style={{ width: "40%" }}> Customer Name :</p><input className={`input-field ml-3  p-1  border ${inputValue.trim() !== '' ? 'bg-white' : 'bg-gray-200'}`} onChange={handleInputChange} style={{ width: "55%" }} /> </div>
                <div className='flex justify-center my-2'><p className='text-end md:text-start' style={{ width: "40%" }}> Customer Number :</p><input className='bg-gray-200  ml-3 p-1 ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-center my-2'><p className='text-end md:text-start' style={{ width: "40%" }}> Contact  Person :</p><input className='bg-gray-200  ml-3 p-1 ' style={{ width: "55%" }} /> </div>
                <div className='flex justify-center my-2'><p className='text-end md:text-start' style={{ width: "40%" }}> Registration  Number :</p><input className='bg-gray-200  ml-3 p-1 ' style={{ width: "55%" }} /> </div>
              </div >
              <div className='flex justify-around ' >
                <p>Remarks :</p>
                <textarea className='boder bg-gray-200'></textarea>
              </div>
            </div>
            <div className='bg-gray-200 flex justify-end p-2 mx-2'>
              <button className='theme_btn_md rounded-0'>Submit</button>
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

          {/* Data Logs  */}
          <div className='m-2 bg-white mt-4'>
            <h1 className='text-xl font-semibold bg-black text-white p-2 '> Data Log</h1>
            <MaterialReactTable table={table} />
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
