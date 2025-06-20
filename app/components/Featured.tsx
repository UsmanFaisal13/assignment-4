import React from 'react'
import Card from './Card'

const Featured = () => {
    return (
        <div className='flex flex-col gap-6 lg:px-44'>
            <h1 className='font-heebo text-[22px] font-medium leading-[32.31px] pl-2 lg:pl-0'>Featured works</h1>
            <div className='flex flex-col lg:gap-32 gap-64'>
                <Card src='/Rectangle 30.png' />
                <Card src='/Rectangle 32.png' />
                <Card src='/Rectangle 34.png' />
            </div>

        </div>
    )
}

export default Featured