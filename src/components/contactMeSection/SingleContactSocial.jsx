import React from 'react'

const SingleContactSocial = ({Icon,link}) => {
  return (
    <div className='flex items-center justify-center w-12 h-12 p-3 text-2xl border rounded-full border-orange text-orange'>
      <a href={link} className='cursor-pointer'><Icon/></a>
    </div>
  )
}

export default SingleContactSocial
