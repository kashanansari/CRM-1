import React from 'react'
import UpdateProfile from '../../Components/UpdateProfile'
import SuperAdminSidebar from '../../Components/SuperAdminSidebar'

export default function SuperAdminEditProfile() {
  return (
    <div>
    <div className='flex h-[100vh] bg-black'>
        <SuperAdminSidebar />
        <div className='bg-white rounded-xl m-2 p-2 w-100 overflow-y-scroll'>
            <UpdateProfile />
        </div>
    </div>
</div>
  )
}
