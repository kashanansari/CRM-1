import React from 'react'
import UpdateProfile from '../../Components/UpdateProfile'
import SuperVisorSidebar from '../../Components/SuperVisorSidebar'

export default function EditProfileSuperVisor() {
  return (
    <div>
    <div className='flex h-[100vh] bg-black'>
        <SuperVisorSidebar />
        <div className='bg-white rounded-xl m-2 p-2 w-100 overflow-y-scroll'>
            <UpdateProfile />
        </div>
    </div>
</div>
  )
}
