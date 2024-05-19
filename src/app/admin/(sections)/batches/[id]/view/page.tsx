"use client"
import { Batch } from '@/types/admin.interface';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

const ViewBatchs = ({ params }: { params: { id: number } }) => {
  const [batch, setBatche] = useState<Batch>();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const res = await axios.get('http://95.165.94.222:8090/api/v1/admin/batches/get/' + params?.id, {
          headers: {
            'Authorization': session?.token.accessToken
          }
        });
        setBatche(res.data)
      }
    };
    fetchData();
  }, [session]);

  return (
    <>
      {batch == undefined ? (
        <>
        </>
      ) : (
        <div className="mt-20 mr-8 ml-8 md:ml-72 md:mt-8 mb-8" >
          <table className="table-auto w-full">
            <tbody>
              <tr className="bg-[#272B35] border-gray-700 border-b">
                <td className="px-6 py-4 whitespace-nowrap">ID</td >
                <td className="px-6 py-4">{batch?.id}</td>
              </tr >
              <tr className="bg-[#272B35] border-gray-700 border-b">
                <td className="px-6 py-4 whitespace-nowrap">Title</td>
                <td className="px-6 py-4">{batch?.title}</td>
              </tr>
              <tr className="bg-[#272B35] border-gray-700 border-b">
                <td className="px-6 py-4 whitespace-nowrap">Game</td>
                <td className="px-6 py-4">{batch?.game.name}</td>
              </tr>
              <tr className="bg-[#272B35] border-gray-700 border-b">
                <td className="px-6 py-4 whitespace-nowrap">Sort</td>
                <td className="px-6 py-4">{batch?.sort}</td>
              </tr>
              <tr className="bg-[#272B35] border-gray-700 border-b">
                        <td className="px-6 py-4 whitespace-nowrap">Title locales</td>
                        <td className="px-6 py-4 whitespace-nowrap flex flex-col space-y-3">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>Language</th>
                                        <th>Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {batch?.languages.map((languag, index) => (
                                        <tr key={index}>
                                            <td>
                                                <input disabled value={languag.title} className="flex flex-row border rounded-l-lg text-sm w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                                            </td>
                                            <td>
                                                <input disabled value={languag.text} className="flex flex-row border rounded-r-lg text-sm w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </td>
                    </tr>
            </tbody >
          </table >
        </div >
      )}
    </>
  )
}

export default ViewBatchs
