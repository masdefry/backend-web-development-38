import { BsPersonAdd } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegTrashCan } from 'react-icons/fa6';
import { BiEdit } from 'react-icons/bi';
export default function App() {
  return (
    <main className='p-10'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold'>Manajemen Anggota</h1>
          <p className='text-gray-500'>
            Kelola seluruh data anggota perpustakaan secara efisien.
          </p>
        </div>
        <button className='btn bg-green-500 text-white rounded-full text-lg'>
          <BsPersonAdd /> Tambah Anggota
        </button>
      </div>

      <div className='bg-white rounded-md mt-5 p-10'>
        <div className='flex items-center gap-3'>
          <label className='input rounded-full'>
            <IoSearchOutline />
            <input
              type='text'
              className='grow'
              placeholder='Cari id atau nama anggota'
            />
          </label>
          <select defaultValue='Pick a color' className='select rounded-full'>
            <option disabled={true}>Status Anggota</option>
            <option>Aktif</option>
            <option>Tidak Aktif</option>
          </select>
        </div>
        <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-3'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th>ID Anggota</th>
                <th>Nama</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Muhammad Defryan</td>
                <td>
                  <span className='py-1 px-5 bg-green-200 rounded-full'>
                    Aktif
                  </span>
                </td>
                <td className='flex items-center gap-3'>
                  <BiEdit className='text-2xl text-blue-500' />
                  <FaRegTrashCan className='text-xl text-red-500' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
