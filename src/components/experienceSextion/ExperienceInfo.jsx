import React from 'react'

const ExperienceInfo = ({number,text}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-6xl font-bold text-cyan'>{number}</p>
      <p className='-mt-4 text-xl font-bold uppercase text-lightGrey '>{text}</p>
    </div>
  )
}

export default ExperienceInfo
