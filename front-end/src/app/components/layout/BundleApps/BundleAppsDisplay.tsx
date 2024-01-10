import React from 'react'
import BundleAppsList from './BundleAppsList'

interface BundleAppsDisplayProps {
  title: string,
  apps: {
     name: string,
     image: string,
  }[],
}

const BundleAppsDisplay = ({title, apps}: BundleAppsDisplayProps) => {
  return (
    <div className='flex flex-col mt-8 justify-center items-center'>
        <h3 className='lg:text-2xl text-gray-800 font-bold'>{title}</h3>
        <hr className='w-1/6 border-gray-300 mt-4 mb-8' />
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {
            apps.map((app, index) => {
              return (
                <BundleAppsList key={index} app={app} />
              )
            })
          }
        </div>
    </div>
  )
}

export default BundleAppsDisplay