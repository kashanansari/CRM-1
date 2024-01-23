import React, { useState } from 'react'
import DataLogSuperAdmin from '../SuperAdminDashboard/DataLogSuperAdmin';
import ComplainLogSuperAdmin from '../SuperAdminDashboard/ComplainLogSuperAdmin';
import RedoSuperAdmin from '../SuperAdminDashboard/RedoSuperAdmin';
import NRSuperAdmin from '../SuperAdminDashboard/NRSuperAdmin';
import RenewalLogSuperAdmin from '../SuperAdminDashboard/RenealLogSuperAdmin';
import CRO_SIdebar from '../../Components/CRO_SIdebar';

export default function CROLogs() {
    const [selectedLog, setSelectedLog] = useState('data');


    const handleLogButtonClick = (logType) => {
        setSelectedLog(logType);
    };

  
    return (
        <div>
            <CRO_SIdebar/>
            <div className='bg-gray-200 rounded-xl m-2 p-2 w-100 '>
                <div className='flex justify-content-center'>
                    <input className='w-96 mx-4  p-2 custum_input' placeholder='Enter Registration , Engine or  Chachis Number ' />
                    <button className='theme_btn_md mx-4 rounded'>Search</button>
                </div>
                <div className='flex m-4 mb-0'>
                    <button
                        className={`mr-1 text-xs font-bold  bg-white p-2 ${selectedLog === 'data' ? 'bg-gray-500' : ''}`}
                        onClick={() => handleLogButtonClick('data')}
                    >
                        Data Log
                    </button>
                    <button
                        className={`mr-1 text-xs font-bold  bg-white p-2 ${selectedLog === 'complain' ? 'bg-gray-500' : ''}`}
                        onClick={() => handleLogButtonClick('complain')}
                    >
                        Complain Log
                    </button>
                    <button className={`mr-1 text-xs font-bold  bg-white p-2 ${selectedLog === 'Redo' ? 'bg-gray-500' : ''}`}
                        onClick={() => handleLogButtonClick('Redo')}>Redo </button>
                    <button className={`mr-1 text-xs font-bold  bg-white p-2 ${selectedLog === 'NR' ? 'bg-gray-500' : ''}`}
                        onClick={() => handleLogButtonClick('NR')}>N/R (No Report)</button>
                </div>
                {selectedLog === 'data' && <DataLogSuperAdmin />}
                {selectedLog === 'complain' && <ComplainLogSuperAdmin />}
                {selectedLog === 'NR' && <NRSuperAdmin />}
                {selectedLog === 'Redo' && <RedoSuperAdmin />}
            </div>
        </div>
    )
}
