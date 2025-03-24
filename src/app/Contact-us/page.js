import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ContactSection from '../sections/ContactUs'

export default function page() {
  return (
    <div>
<Breadcrumb name={'Contact Us'} />
<ContactSection singlePage={true} />
    </div>
  )
}
