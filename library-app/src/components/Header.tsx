import { MdNotifications } from 'react-icons/md';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

export default function Header() {
  return (
    <div className='flex items-center justify-between p-5 bg-white'>
      <div className='breadcrumbs text-sm'>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
      <div className='flex items-center gap-3'>
        <MdNotifications className='text-2xl' />
        <BsFillQuestionCircleFill className='text-2xl' />
      </div>
    </div>
  );
}
