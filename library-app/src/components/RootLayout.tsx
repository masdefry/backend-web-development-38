import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
export default function RootLayout() {
  return (
    <main className='grid grid-cols-5'>
      <Sidebar />
      <div className='col-span-4 bg-gray-100 h-dvh'>
        <Header />
        {/* Main Content */}
        <Outlet />
      </div>
    </main>
  );
}
