"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import ErrorModal from '@/components/common/ErrorModal'

const loginPage = () => {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState('200');
    const [message, setMessage] = React.useState('Ok!')

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });
        if(res?.status !== 200){
            setStatus('Ошибка авторизации: ' + res.status)
            setMessage('Проверте коректность данных в форме')
            setOpen(true)
            return
        }
        if (res?.url) {
            router.replace('/')
        }
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <ErrorModal status={status} message={message} visible={open} setVisible={setOpen} />
            {/* <div className='flex'>
                <CardTitle>Вход</CardTitle>
                <CardDescription>Войдите в свой аккаунт!</CardDescription>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        label='Почта'
                        type='text'
                        placeholder='email'
                        required
                    />
                    <FormInput
                        label='Пароль'
                        type='password'
                        placeholder='password'
                        required
                    />
                    <FormButton type="submit">Войти</FormButton>
                </form>
            </div> */}

            <div className="w-full max-w-xs mt-36">
                <form onSubmit={handleSubmit} className="bg-[#272B35] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 flex flex-row text-2xl items-center justify-center">
                        Sign in
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">
                            Email
                        </label>
                        <input required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">
                            Password
                        </label>
                        <input required className="flex flex-row border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" type="password" placeholder="password" />
                    </div>
                    {/* <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div> */}
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default loginPage
