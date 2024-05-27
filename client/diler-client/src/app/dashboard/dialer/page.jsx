import React from 'react'
import Sidebar from '@/app/components/sidebar'
import Main from '@/app/components/main'

export default function page() {
  return (
    <>
      <div className="tw-bg-[#f8f9fa] sm:tw-col-span-3"><Sidebar /></div>
      <div className="tw-bg-teal-600 sm:tw-col-span-7"><Main/></div>
    </>
  )
}
