'use client'
import React, { useState} from 'react'
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"
import  Select  from './interface/admin/Select'
import ChooseRows  from  './interface/admin/ChooseRows'


type DataRow = { 
    [key: string]: any; 
};


interface DataGridProps<T> {
    data: T[];
    columns: {
        key: keyof T;
        label: string;
    }[];
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


    const displayedData = sortedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    return (
        <div className="space-y-2">
        <div className="overflow-x-auto">
            <div
                style={
                    { 
                        gridTemplateColumns: `repeat(${columns.length + 1}, 1fr)`,
                        border: '1px solid transparent',
                        background:'linear-gradient(to right, #2A1F61, #1B1E52) padding-box, linear-gradient(to right, #FFFFFF26, #FFFFFF01) border-box'
                    }
                }
                className="grid bg-[#22276E80] rounded-2xl min-h-[60px] border border-[#FFFFFF26] py-[16px] px-[10px]"
            >
                <Select checked={selectedRows.size === data.length} onChange={selectAllRows} />
                {columns.map(({ key, label }) => (
                    <div
                        key={key.toString()}
                        onClick={() => {}}
                        className="text-white cursor-pointer"
                    >
                        {label}
                    </div>
                ))}
            </div>
            {displayedData.map((row, index, rowIndex) => (
                <div
                    key={row.id}
                    className={`grid min-h-[60px] py-[16px] my-[20px] px-[10px] text-white p-2 rounded-2xl ${selectedRows.has(rowIndex) ? 'bg-[#7E50FF33]' : ''}`}
                    style={{
                        gridTemplateColumns: `repeat(${columns.length + 1}, 1fr)`,
                        border: '1px solid transparent',
                        background: hoveredIndex === index
                            ? 'linear-gradient(to right, #2A1F61, #1B1E52) padding-box, linear-gradient(to right, #FFFFFF26, #FFFFFF01) border-box'
                            : 'transparent',
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <Select
                        checked={selectedRows.has(index)} 
                        onChange={() => handleSelectRow(index)} 
                    />
                    {columns.map(({ key }) => (
                        <div key={key.toString()}>{row[key]}</div>
                    ))}
                </div>
            ))}
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