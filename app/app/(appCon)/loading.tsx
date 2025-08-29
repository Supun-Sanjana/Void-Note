import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const loading = () => {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center space-y-4">
        <HashLoader color="#4F46E5" size={50} />      </div>
    </div>
    </div>
  )
}

export default loading

