import React from 'react'
import UpdateProfile from '../../Components/UpdateProfile'
import Technical_Sidebar from '../../Components/Technical_Sidebar'

export default function UpdateProfileTech() {
  return (
    <div>
    <div className='flex h-[100vh] bg-black'>
        <Technical_Sidebar />
        <div className='bg-white rounded-xl m-2 p-2 w-100 overflow-y-scroll'>
            <UpdateProfile />
        </div>
    </div>
</div>
  )
}
