"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const GoHome = () => {
    const router = useRouter();
    router.push('/')
  return (
    <div>
    </div>
  )
}

export default GoHome
