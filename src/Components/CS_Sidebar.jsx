import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faUsers, faUser, faUserPlus, faWrench, faTruck, faPenToSquare, faBook, faFolderClosed } from '@fortawesome/free-solid-svg-icons';

export default function SuperVisorSidebar() {
    return (
        <div>
            <div className="flex h-[100vh] sidebar-container flex-col justify-centere bg-black w-64 overflow-y-scroll">
                <div className="sticky inset-x-0 bottom-0">
                    <Link to="#" className="flex flex-col items-center space-y-3 p-4">
                        <img
                            alt="Man"
                            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="h-12 w-12 rounded-xl object-cover"
                        />
                        <div>
                            <p className="text-sm font-medium text-white">
                                <strong className="block text-lg ">Eric Frusciante</strong>

                                <span> CSR</span>
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="px-4 py-6">
                    <ul className="mt-6 space-y-1">
                        <li>
                            <Link to="/cs" className="block rounded-lg  px-4 py-2 text-sm font-medium text-gray-700">
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/cs/allUser"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  hover:text-white"
                            >
                                <FontAwesomeIcon icon={faFolderClosed} /> All Users
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cs/addUser"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  hover:text-white"
                            >
                                Add User
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cs/logs"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  hover:text-white"
                            >
                              Logs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cs/request"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  hover:text-white"
                            >
                               Request Form
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cs/complains"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  hover:text-white"
                            >
                               Complains
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/sv/updateProfile"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500  hover:text-white"
                            >
                                Update Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
