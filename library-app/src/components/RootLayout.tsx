import { Outlet } from 'react-router-dom';
import { FaBookReader } from 'react-icons/fa';

import { menuSidebar, type MenuSidebar } from '../constants/menu-sidebar';
export default function RootLayout() {
  return (
    <main className='grid grid-cols-5'>
      {/* Sidebar */}
      <aside className='col-span-1 bg-gray-100 h-dvh p-5'>
        {/* Logo */}
        <div className='flex items-center gap-3 '>
          <div className='bg-green-500 p-1 w-fit h-fit rounded-2xl p-3'>
            <FaBookReader className='text-2xl text-white' />
          </div>
          <div>
            <h1 className='text-2xl font-bold'>LibSys</h1>
            <h2 className='text-green-500 font-bold text-sm'>ADMIN PANEL</h2>
          </div>
        </div>

        <div className='flex flex-col gap-3 mt-10'>
          {menuSidebar.map((menu: MenuSidebar, index) => {
            return (
              <div
                key={index}
                className='flex items-center gap-3 p-3 rounded-xl'
              >
                {menu?.icon}
                <h2 className='text-lg'>{menu?.title}</h2>
              </div>
            );
          })}
        </div>
      </aside>

      {/* Content */}
      <div className='col-span-4 bg-gray-300 h-dvh'>
        {/* Component Header */}

        {/* Main Content */}
        <Outlet />
      </div>
    </main>
  );
}
