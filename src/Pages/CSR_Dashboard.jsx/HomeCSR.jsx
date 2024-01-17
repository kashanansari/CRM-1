import React from 'react';
import CSR_Sidebar from '../../Components/CSR_SIdebar';
import CSRLogs from '../CSR_Dashboard.jsx/CSRLogs'

export default function HomeCSR() {
  return (
    <div>
      <div className='flex h-[100vh]'>
      <CSR_Sidebar/>
      <div className='bg-white rounded-xl m-2 p-2 w-100 overflow-y-scroll'>
        <CSRLogs/>
      </div>
      </div>
    </div>
  )
}
