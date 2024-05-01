import React from 'react'

const NumberInput = ({...props}) => {
  return (
    <input {...props} type="number" className="border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
  )
}

export default NumberInput
