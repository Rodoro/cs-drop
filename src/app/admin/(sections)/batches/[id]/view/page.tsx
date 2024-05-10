"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card';
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
    <div className="ml-72 m-8 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>
            Create Batch
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 mb-5">
          <div>
            Title: {batch?.title}
          </div>
          <div>
            Game: {batch?.game.name}
          </div>
          <table>
            <thead>
              <tr>
                <th>Language</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {batch?.languages.map((locale, index) => (
                <tr key={index}>
                  <td>
                    {locale.title}
                  </td>
                  <td>
                    {locale.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}

export default ViewBatchs
