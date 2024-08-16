import React, { useContext } from 'react'
import { HomeIcon, UserGroupIcon, FolderIcon, LogoutIcon } from '@heroicons/react/outline';
import { ApiContext } from '../api/ApiProvider';


export const SideNav = ({user}) => {
  const {logout} = useContext(ApiContext);
  return (
    <div className="flex flex-col h-screen border-r py-20 w-80 bg-slate-1 00">

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-4">
        <a href="/dashboard" className="flex items-center space-x-2 text-blue-600">
          <HomeIcon className="w-6 h-6" />
          <span className="font-medium">Home</span>
        </a>
        <a href="/dashboard/expenses" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
          <UserGroupIcon className="w-6 h-6" />
          <span className="font-medium">Expsenses</span>
        </a>
        <a href="/dashboard/wallet" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
          <FolderIcon className="w-6 h-6" />
          <span className="font-medium">Wallet</span>
        </a>
      </nav>

      {/* Account */}
      <div className="px-4 py-6 space-y-4">
        <h3 className="text-xs font-semibold text-gray-400">Account</h3>

        <div href="" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium">{user.name ? user.name.substring(0, 1) : ''}</span>
          </div>

        <div className='flex flex-col'>
          <span className="font-medium text-xl">{user.name}</span>
          <span className='text-xs font-light'>{user.email}</span>
        </div>
       
        </div>

      </div>

      {/* Logout */}
      <div className="px-4 py-6" onClick={logout}>
        <a href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
          <LogoutIcon className="w-6 h-6" />
          <span className="font-medium">Logout</span>
        </a>
      </div>
    </div>
  )
}
