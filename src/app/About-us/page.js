import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import KnowAbout from '../sections/KnowAbout'

export default function page() {
  return (
    <div>
        <Breadcrumb name={'About Us'} />
        <KnowAbout />
    </div>
  )
}
