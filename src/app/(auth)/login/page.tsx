import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'
import LoginForm from '@/containers/auth/LoginForm'

const page = () => {
  return (
    <div className='flex flex-col items-center'>
            <div className='w-96'>
                <Card>
                    <CardHeader>
                        <CardTitle>Вход</CardTitle>
                        <CardDescription>Войдите в свой аккаунт!</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <LoginForm />
                    </CardContent>
                </Card>
            </div>
        </div>
  )
}

export default page
