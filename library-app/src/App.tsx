import { BsPersonAdd } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegTrashCan } from 'react-icons/fa6';
import { BiEdit } from 'react-icons/bi';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function App() {
  const [members, setMembers] = useState<any[]>([]);
  const [totalPage, setTotalPage] = useState<number>(0);

  const onGetMembers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/members');
      setMembers(response?.data?.data?.members);
      setTotalPage(response?.data?.data?.totalPage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetMembers();
  }, []);

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
              {members?.map((member: any, index: number) => {
                return (
                  <tr key={index}>
                    <th>{member?.id}</th>
                    <td>
                      {member?.firstName} {member?.lastName}
                    </td>
                    <td>
                      <span className='py-1 px-5 bg-green-200 rounded-full'>
                        {member?.status}
                      </span>
                    </td>
                    <td className='flex items-center gap-3'>
                      <BiEdit className='text-2xl text-blue-500' />
                      <FaRegTrashCan className='text-xl text-red-500' />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className='p-5 flex justify-end items-center gap-3'>
            <p className='font-bold text-md'>Page:</p>
            <div className='join'>
              {Array.from({ length: totalPage }, (v, i) => i + 1)?.map(
                (page: number, index: number) => {
                  return (
                    <button key={index} className='join-item btn btn-xs'>
                      {page}
                    </button>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
