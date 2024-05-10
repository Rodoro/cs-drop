"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import axios from 'axios';
import { Staff } from '@/types/admin.interface';
import InputSearch from '@/components/InputSearch';
import NumberInput from '@/components/interface/NumberInput';

const Staff = () => {
    const { data: session, status: sessionStatus } = useSession();
    const [staffs, setStaffs] = useState<Staff[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortedObj, setSortedObj] = useState<Staff[]>([]);

    useEffect(() => {
        setSortedObj(staffs.filter(obj => obj.name.toLowerCase().includes(searchTerm.toLowerCase())).filter(obj => obj.email.toLowerCase().includes(searchTerm.toLowerCase())))
    }, [searchTerm, staffs]);

    const handleItemsPerPageChange = (e: any) => {
        setCurrentPage(1)
        setItemsPerPage(parseInt(e.target.value, 10));
    };

    useEffect(() => {
        const fetchData = async () => {
            if (sessionStatus == "authenticated") {
                const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/staff/get-all', {
                    headers: {
                        'Authorization': session?.token.accessToken
                    }
                });
                setStaffs(res.data.result);
            }
        };
        fetchData();
    }, [sessionStatus])

    const sortedStaffs = sortedObj.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="ml-72 m-8">
            <div className='flex flex-row justify-between mb-6'>
                <InputSearch onChange={(e: any) => setSearchTerm(e.target.value)} />
                <NumberInput value={itemsPerPage} onChange={handleItemsPerPageChange} />
            </div>

            <div className="flex items-center flex-col">
                <div className='flex flex-row w-full'>
                    <div className="w-1/3"><b>Email</b></div>
                    <div className="w-1/3"><b>Name</b></div>
                    <div className="w-1/3"><b>Guid</b></div>
                </div>
                {sortedStaffs.map(staff => (
                    <div className='flex flex-row w-full my-2' key={staff.guid}>
                        <div className="w-1/3">{staff.email}</div>
                        <div className="w-1/3">{staff.name}</div>
                        <div className="w-1/3">{staff.guid}</div>
                    </div>
                ))}
            </div>

            {setSortedObj.length == 0 ? (
                <div className='flex flex-row justify-center text-3xl mt-6'>
                    Записи ненайдены
                </div>
            ) : (
                <div className='flex flex-row justify-center space-x-3 mt-3'>
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                    <span> / </span>
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage * itemsPerPage >= sortedObj.length}>Next</button>
                </div>
            )}
        </div>
    )
}

export default Staff
