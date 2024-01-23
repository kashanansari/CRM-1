import React from 'react'
import UpdateProfile from '../../Components/UpdateProfile'
import CS_Sidebar from '../../Components/CS_Sidebar'

export default function EditProfileCS() {
  return (
    <div>
    <div className='flex h-[100vh] bg-black'>
        <CS_Sidebar />
        <div className='bg-white rounded-xl m-2 p-2 w-100 overflow-y-scroll'>
            <UpdateProfile />
        </div>
    </div>
</div>
  )
}
