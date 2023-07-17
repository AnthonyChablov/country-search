import React from 'react'

interface IAttribute {
    title: string,
    description: string
}

const Attribute = ({title, description}:IAttribute) => {
  return (
    <div className='flex'>
        <p>{title}</p>
        <p>{description}</p>
    </div>
  )
}

export default Attribute