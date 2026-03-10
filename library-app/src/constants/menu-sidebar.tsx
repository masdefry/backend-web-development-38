import { MdDashboard, MdBook } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GoArrowSwitch } from 'react-icons/go';
import { TbReportAnalytics } from 'react-icons/tb';
import { TbSettingsFilled } from 'react-icons/tb';
export type MenuSidebar = {
  title: string;
  icon: any;
};

export const menuSidebar = [
  {
    title: 'Dashboard',
    icon: <MdDashboard className='text-3xl' />,
  },
  {
    title: 'Buku',
    icon: <MdBook className='text-3xl' />,
  },
  {
    title: 'Anggota',
    icon: <BsFillPeopleFill className='text-3xl' />,
  },
  {
    title: 'Peminjaman',
    icon: <GoArrowSwitch className='text-3xl' />,
  },
  {
    title: 'Laporan',
    icon: <TbReportAnalytics className='text-3xl' />,
  },
  {
    title: 'Pengaturan',
    icon: <TbSettingsFilled className='text-3xl' />,
  },
];
