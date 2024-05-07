import { Game } from '@/types/admin.interface'
import React, { useEffect, useState } from 'react'
import InputSearch from '../InputSearch'
import NumberInput from '../interface/NumberInput'

type TableAdminProps = {
  items: Game[]
  children?: React.ReactNode
}

const TableAdmin: React.FC<TableAdminProps> = ({ items, children, ...props }) => {
  const [obj, setObj] = useState(items);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedObj, setSortedObj] = useState<Game[]>();

  useEffect(() => {
    setSortedObj(obj.filter(obj => obj.name.toLowerCase().includes(searchTerm)))
  }, [searchTerm, obj]);

  const handleItemsPerPageChange = (e: any) => {
    setCurrentPage(1)
    setItemsPerPage(parseInt(e.target.value, 10));
  };

  return (
    <div className="ml-32 m-8">
      <div className='flex flex-row justify-between mb-6'>
        <InputSearch onChange={(e: any) => setSearchTerm(e.target.value)} />
        <NumberInput value={itemsPerPage} onChange={handleItemsPerPageChange} />
      </div>

      {children}

      {setSortedObj.length == 0 ? (
        <div className='flex flex-row justify-center text-3xl mt-6'>
          Записи ненайдены
        </div>
      ) : (
        <div className='flex flex-row justify-center space-x-3 mt-3'>
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
          <span> / </span>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage * itemsPerPage >= setSortedObj.length}>Next</button>
        </div>
      )}
    </div>
  )
}

export default TableAdmin