"use client"
import React, { useState, ForwardedRef } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";
import ChooseRows from '@/components/interface/admin/ChooseRows';
import Select from '@/components/interface/admin/Select';


type DataRow = { 
    [key: string]: any; 
};


interface DataGridProps<T> {
    data: T[];
    columns: Array<{
        key: keyof T | string;
        label: string;
        render?: (row: T) => React.ReactNode;
    }>;
}

interface Column<T> {
    key: keyof T | string; // Позволяем string в качестве ключа
    label: string;
    render?: (row: T) => React.ReactNode; // render теперь опционален
}

const DataGrid = <T extends DataRow>({ data, columns }: DataGridProps<T>) => {
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const sortedData = React.useMemo(() => {
        let sortableItems = [...data];
        if (sortConfig !== null) {
            const { key, direction } = sortConfig;
            sortableItems.sort((a, b) => {
                if (a[key] < b[key]) {
                    return direction === 'ascending' ? -1 : 1;
                }
                if (a[key] > b[key]) {
                    return direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [data, sortConfig]);

    const requestSort = (key: string) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const handleSelectRow = (index:number) => {
        setSelectedRows((prevSelectedRows) => {
            const newSelectedRows = new Set(prevSelectedRows);
            if (newSelectedRows.has(index)) {
                newSelectedRows.delete(index); 
            } else {
                newSelectedRows.add(index); 
            }
            return newSelectedRows;
        });
    };

    const selectAllRows = () => {
        const allSelected = selectedRows.size === data.length;
        const newSelectedRows = allSelected ? new Set<number>() : new Set<number>(data.map((_, index) => index));
        setSelectedRows(newSelectedRows);
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        const newSelectedRows = checked ? new Set(displayedData.map(row => row.id)) : new Set();
        setSelectedRows(newSelectedRows);
    };

    const displayedData = sortedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    return (
        <div className="space-y-2 ">
        <div className="overflow-hidden"> {/* Добавляем overflow-hidden */}
            <div className='grid' style={{
                gridTemplateColumns: `repeat(${columns.length + 1}, 1fr)`,
                gridTemplateRows: `repeat(${displayedData.length + 1}, 1fr)`,
            }}>
                <div className={`h-[60px] flex items-center pl-[12px] mb-[10px] rounded-l-[15px] bg-[#7E50FF33]`}>
                    <Select onChange={handleSelectAll} />
                </div>

                {columns.map(({ key, label }, colIndex) => (
                    <div
                        key={key.toString()}
                        className={`h-[60px] flex items-center mb-[10px] bg-[#7E50FF33] ${colIndex === columns.length - 1 ? 'rounded-r-[15px]' : ''}`}
                    >
                        {label}
                    </div>
                ))}

                {displayedData.map((row, rowIndex) => (
                    <React.Fragment key={row.id}>
                        <div className={`h-[60px] flex items-center mb-[10px] pl-[12px] ${rowIndex === displayedData.length - 1 ? 'rounded-bl-[15px]' : ''} rounded-l-[15px] ${selectedRows.has(row.id) ? 'bg-[#7E50FF33]' : ''}`}>
                            <Select
                                checked={selectedRows.has(row.id)}
                                onChange={() => handleSelectRow(row.id)}
                            />
                        </div>
                        {columns.map(({ key }, colIndex) => (
                            <div
                                key={`${row.id}-${colIndex}`}
                                className={`h-[60px] flex items-center mb-[10px] ${colIndex === columns.length - 1 ? 'rounded-r-[15px]' : ''} ${selectedRows.has(row.id) ? 'bg-[#7E50FF33]' : ''}`}
                            >
                                {key === 'imageUrl' ? (
                                    <img
                                        src={row[key].replace(/ /g, '%20')}
                                        alt={row.title} // или любое другое значение, отвечающее за название
                                        style={{ width: '50px', height: '50px', objectFit: 'cover' }} // меняйте размеры, по необходимости
                                        onError={(e) => { e.currentTarget.src = 'fallback-image-url'; }} // замените на своего URL
                                    />
                                ) : (
                                    typeof row[key] === 'boolean' ? (
                                        row[key] === true ?
                                            <div className='w-[30px] h-[30px] text-[#7FFF52] flex justify-center items-center rounded-lg bg-[#1E2E35] border border-[#7FFF52A6]'>
                                                <IoCheckmarkSharp />
                                            </div> :
                                            <div className='w-[30px] h-[30px] text-[#FF8585] flex justify-center items-center rounded-lg bg-[#2B1B36] border border-[#FF8585A6]'>
                                                <RxCross2 />
                                            </div>
                                    ) : (
                                        row[key] === 'null' ? 'no' : row[key]
                                    )
                                )}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
        <div className='h-[1px] w-[100%] bg-[#aabcf977]'></div>
            <div className="flex justify-between items-center h-[32px] my-[20px]">
                <div className="text-[#AABCF9] ml-[40px] py-[3px]">
                    {data.length} rows selected
                </div>
                <div className="flex items-center mr-[40px]">
                    <div className="flex items-center mr-[25px]">
                        <div className="text-white mr-[10px]">Rows per page:</div>
                        <ChooseRows onChange={setRowsPerPage} />
                    </div>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="text-white inline-flex items-center justify-center"
                    >
                        <IoIosArrowBack />
                    </button>
                    <div className="cursor-pointer inline-flex items-center justify-center ml-[15px] mr-[15px] text-white w-[32px] h-[32px] bg-[#7E50FF] shadow-[4px_4px_34px_0_rgba(139,50,252,0.2)] rounded-lg text-center">
                        {currentPage}
                    </div>
                    {totalPages > 1 && (
                    <div className="cursor-pointer inline-flex items-center justify-center w-[32px] h-[32px] text-white rounded-lg text-center bg-[#22276E99] mr-[15px]">
                        ...
                    </div>
                    )}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="text-white inline-flex items-center justify-center"
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div>
    );
};


export default DataGrid;