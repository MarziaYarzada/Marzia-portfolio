import React from 'react'

const HeroGradient = () => {
  return (
    <div>
      <div className='absolute top-0 shadow-cyanMediumShadow right-[400px] -z-10 animate-pulse'></div>
      <div className='absolute top-0 right-0 shadow-orangeMediumShadow -z-10 animate-pulse'></div>
      <div className='absolute shadow-cyanMediumShadow top-[300px] left-0 -z-10 opacity-50'></div>
      <div className='absolute shadow-orangeMediumShadow top-[500px] left-0 -z-10 opacity-50'></div>
    </div>
  )
}

export default HeroGradient
