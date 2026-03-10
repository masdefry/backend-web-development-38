import { menuSidebar, type MenuSidebar } from '../constants/menu-sidebar';
import { FaBookReader } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className='col-span-1 h-dvh p-5'>
      <div className='flex flex-col justify-between h-full'>
        <div>
          {/* Logo */}
          <div className='flex items-center gap-3'>
            <div className='bg-green-500 w-fit h-fit rounded-2xl p-3'>
              <FaBookReader className='text-2xl text-white' />
            </div>
            <div>
              <h1 className='text-2xl font-bold'>LibSys</h1>
              <h2 className='text-green-500 font-bold text-sm'>ADMIN PANEL</h2>
            </div>
          </div>

          {/* List Menu */}
          <div className='flex flex-col gap-3 mt-10'>
            {menuSidebar.map((menu: MenuSidebar, index) => {
              return (
                <div
                  key={index}
                  className='flex items-center gap-3 p-3 rounded-xl'
                >
                  {menu?.icon}
                  <h2 className='text-md'>{menu?.title}</h2>
                </div>
              );
            })}
          </div>
        </div>

        {/* Profile User */}
        <div className='bg-gray-100 rounded-full p-3 flex items-center gap-2'>
          <div className='bg-gray-300 rounded-full w-10 h-10'></div>
          <div>
            <h2 className='text-lg font-bold c'>Muhammad Defryan</h2>
            <p className='text-gray-500'>Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
